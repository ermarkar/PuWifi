// Create a MySQL connection pool with
// a max of 10 connections, a min of 2, and a 30 second max idle time
var Pool = require('generic-pool').Pool;
var mysql = require('mysql'); // v2.10.x
var DBProperties = require('./../config/DatabaseProperties');

var pool = new Pool({
    name: 'mysql',
    create: function (callback) {
        var c = mysql.createConnection({
            host: DBProperties.IP,
            user: DBProperties.USER,
            password: DBProperties.PASSWORD,
            database: DBProperties.DB,
            multipleStatements:true
        });

        // parameter order: err, resource
        callback(null, c);
    },
    destroy: function (client) {
        client.end();
    },
    max: 2,
    // optional. if you set this, make sure to drain() (see step 3)
    min: 2,
    // specifies how long a resource can stay idle in pool before being removed
    idleTimeoutMillis: 30000,
    // if true, logs via console.log - can also be a function
    log: false
});
module.exports = pool;


// String.prototype.replaceAll = function(search, replacement) {
//     var target = this;
//     return target.replace(new RegExp(search, 'g'), replacement);
// };
// var json = {name:"s'%d",class:"sda"};

// execute("getName",[json.name,json.class])

// function makeQuery(procedureName,parameters) {
// 	var query = "call " + procedureName + "(";
  
//   for(var i=0;i<parameters.length;i++) {
//   	var param =  parameters[i].replaceAll("'","\\'");
//     query += "'" + param.replaceAll("%","\\%");
//     query += "',"
//   }
//   query += ")";
//   return query;
// }