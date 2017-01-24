const express = require('express');
const router = express.Router();

router.get('/', (ignore, res) => {
    res.status(200).render("index.pug")
});

router.get('/api', (ignore, res) => {
    res.status(200).send("api hit")
});

module.exports = router