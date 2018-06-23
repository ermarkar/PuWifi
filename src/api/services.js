var express = require('express');
var router = express.Router();

module.exports = function (app) {
    app.use('/api/ads', require('./custom-ads')(router));
    app.use('/api/notification', require('./notifications')(router));
    app.use('/api/forms', require('./forms')(router));
    app.use('/api/mail', require('./mail')(router));
}