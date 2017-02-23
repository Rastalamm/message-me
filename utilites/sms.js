"use strict"

const Promise = require('bluebird');
const twilioConfig = require('../config.js').twilio;
const client = require('twilio')(twilioConfig.sid, twilioConfig.api);

const formatNumber = require('phone');

const formatPhoneNumber = (number) => {
    const formattedNumber = formatNumber(number);

    if (formattedNumber.length !== 2) {
        throw {code:400, message: 'Invalid phone number'}
    }

    return () => formattedNumber[0];
};

const send = (number, messageUrl) => {
    return Promise.try(formatPhoneNumber(number))
        .then((phoneNumber) => {
           return client.messages.create({
               to: phoneNumber,
               from: twilioConfig.phoneNumber,
               body: messageUrl
           })
           .then((response) => {
               return response;
           })
           .catch((error) => {
               console.error("error", error);
               throw {code: 500, message: error.body}
           })
        })
};

module.exports = {send}
