"use strict";
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const sassMiddleware = require('node-sass-middleware');
const path = require('path');
const routes = require('./routes/router.js');
const db = require('./models/');

let server;

app.use(sassMiddleware({
    /* Options */
    src: path.join(__dirname, '/templates/views/css'),
    dest: path.join(__dirname, '/public'),
    debug: true,
    force: true,
    outputStyle: 'compressed',
    prefix:  '/css'
}));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/templates/views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/', routes);

app.use(function (ignore, res) {
    res.status(404).render("404/index.pug");
});

server = app.listen(process.env.app_port || 3000, function () {
    const host = server.address().address;
    const port = server.address().port;

    console.log('Listening at http://%s:%s', host, port);
    db.sequelize.sync()
});