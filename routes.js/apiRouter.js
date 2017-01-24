const express = require('express')
const router = express.Router()

router.get('/', (ignore, res) => {
    res.status(200).render("index.pug")
});

module.exports = router