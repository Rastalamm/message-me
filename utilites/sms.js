"use strict"

const twilioConfig = require('../config.js').twilio;
const Promise = require('bluebird');
const client = require('twilio')(twilioConfig.sid, twilioConfig.api);

const phone = require('phone');

const formatPhoneNumber = (number) => {
    const formattedNumber = phone(number);

    if (formattedNumber.length !== 2) {
        throw {code:400, message: 'Invalid phone number'}
    }

    return () => formattedNumber[0];
};

const sendSms = (number, messageUrl) => {

    console.log("sms", number, messageUrl);

    return Promise.try(formatPhoneNumber(number))
        .then((phoneNumber) => {
           return client.messages.create({
               to: phoneNumber,
               from: twilioConfig.phoneNumber,
               body: messageUrl
           })
           .then((response) => {
               console.log(response.from);
               console.log(response.body);
               return response;
           })
           .catch((error) => {
               console.error("error", error);
               throw {code: 500, message: error.body}
           })
        })
};

module.exports = {sendSms}
