"use strict"

const express = require('express');
const router = express.Router();
const Messages = require('../utilites/messages.js');

router.get('/', (ignore, res) => res.status(200).render("index.pug"));

router.post('/', (req, res) => {
    const body = req.body;
    const spec = {
        email: body.email,
        phoneNumber: body.telephone,
        message: body.message
    };

    Messages.save(spec)
        .then((data) => res.status(200).render('success/index.pug'))
        .catch((error) => res.send(error.code));
});

router.get('/messages/:id', (req, res) => {
    const messageId = req.params.id;

    Messages.find(messageId)
        .then((data) => res.status(200).render("message/index.pug", {data}))
        .catch((error) => res.send(error.code));
});

module.exports = router