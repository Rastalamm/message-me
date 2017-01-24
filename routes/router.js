const express = require('express');
const router = express.Router();
const SMS = require('../utilites/sms.js');

router.get('/', (ignore, res) => {
    res.status(200).render("index.pug")
});

router.post('/api', (req, res) => {
    const spec = {
        to: req.body.telephone,
        message: req.body.message
    };

    SMS.sendSms(spec)
        .then((data) =>{
            console.log("data", data);
            res.status(200).send("api hit")
        })
        .catch((err) => {
            console.log("err", err);
            res.send(err.code);
        })
});

module.exports = router