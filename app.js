"use strict";
const express = require('express');
const app = express();
let server;


app.use('/', (req, res) => res.send("ok"));


server = app.listen(process.env.app_port || 3000, function () {
    const host = server.address().address;
    const port = server.address().port;

    console.log('Listening at http://%s:%s', host, port);
});