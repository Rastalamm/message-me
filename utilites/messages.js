"use strict"

const Messages = require('../models/').Message;
const SMS = require('./sms.js');

// Wrap in transaction
const save = (spec) => {
    return Messages.create({
        email: spec.email,
        phone_number: spec.phoneNumber,
        message: spec.message
    })
    .then((data) => {
        const messageUrl = `localhost:3000/messages/${data.id}`;
        const phoneNumber = data.phone_number;
        const email = data.email;

        // check for email and send email instead
        return SMS.send(data.phone_number, messageUrl)
    });
};


const find = (messageId) => {
    return Messages.findById(messageId)
        .then((message) => {
            if (message) {
                return message
            }

            throw {code: 404, message: `No message for id of ${messageId}`}
        })
};


module.exports = {
    save,
    find
}
