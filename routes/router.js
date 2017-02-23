const express = require('express');
const router = express.Router();
const Messages = require('../utilites/messages.js');

router.get('/', (ignore, res) => {
    res.status(200).render("index.pug")
});

router.post('/', (req, res) => {
    const body = req.body;
    const spec = {
        email: body.email,
        phoneNumber: body.telephone,
        message: body.message
    };

    Messages.saveMessage(spec)
        .then((data) =>{
            res.status(200).render('success/index.pug');
        })
        .catch((err) => {
            console.log("err", err);
            res.send(err.code);
        });
});

router.get('/messages/:id', (req, res) => {
    const messageId = req.params.id;

    Messages.findMessage(messageId)
        .then((data) =>{
            console.log("data", data);
            res.status(200).render("message/index.pug", {data})
        })
        .catch((err) => {
            console.log("err", err);
            res.send(err.code);
        });
});

module.exports = router