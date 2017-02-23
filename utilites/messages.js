"use strict"

const Messages = require('../models/').Message;
const SMS = require('./sms.js');

const saveMessage = (spec) => {
    return Messages.create({
        email: spec.email,
        phone_number: spec.phoneNumber,
        message: spec.message
    })
    .then((data) => {
        console.log("data", data);
        const messageUrl = `localhost:3000/messages/${data.id}`;
        const phoneNumber = data.phone_number;
        const email = data.email;

        //check for email and send email instead
        return SMS.sendSms(data.phone_number, messageUrl)
    });
};


const findMessage = (messageId) => {
    return Messages.findById(messageId)
        .then((message) => {
            console.log("message", message);
            if (message) {
                return message
            }

            throw {code: 404, message: `No message for id of ${messageId}`}
        })
};


module.exports = {
    saveMessage,
    findMessage
    }
