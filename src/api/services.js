var express = require('express');
var router = express.Router();
const path = require('path');

module.exports = function (app) {
    app.use('/api/ads', require('./custom-ads')(router));
    app.use('/api/notification', require('./notifications')(router));
    app.use('/api/forms', require('./forms')(router));
    app.use('/api/mail', require('./mail')(router));

    // Redirect to web app if call is not for an api
    app.get('*', function (req, res) {
        console.log(process.cwd())
        res.sendFile( process.cwd() + '/public/index.html');
    });
}