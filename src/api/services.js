var express = require('express');
var router = express.Router();

module.exports = function (app) {
    app.use('/ads', require('./custom-ads')(router);
}