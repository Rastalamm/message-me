"use strict"

const twilioConfig = require('../config.js').twilio;
const promise = require('bluebird');
const client = require('twilio')(twilioConfig.sid, twilioConfig.api);

const sendSms = (spec) => {

    console.log("sms", spec);

    return client.messages.create({
        to:spec.to,
        from: twilioConfig.phoneNumber,
        body: spec.message
    })
    .then((response) => {
        console.log(response.from);
        console.log(response.body);
        return response;
    })
    .catch((error) => {
        console.log("erorr", error);
    })
};

module.exports = {sendSms}
