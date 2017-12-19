/**
 * Create server and listen to port 8080
 */
var express = require('express');
var app = express();
var timeout = require('connect-timeout');
var bodyParser = require('body-parser');

app.use(timeout('120000')); // request-timeout

// to parse request/response data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// that will include all the other web services
require('./api/services')(app);

var port = process.env.PORT || 8080;
// create server
var server = app.listen(port, function () {
    console.log("App listening on : " + port);
});