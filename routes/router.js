const express = require('express');
const router = express.Router();

router.get('/', (ignore, res) => {
    res.status(200).render("index.pug")
});

router.post('/api', (req, res) => {
    res.status(200).send("api hit")
});

module.exports = router