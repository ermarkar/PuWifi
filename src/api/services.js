var express = require('express');
var router = express.Router();

module.exports = function (app) {
    app.use('/api/ads', require('./custom-ads')(router));
}