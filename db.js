const mysql = require('mysql');
const e = require("express");

var pool = mysql.createPool({
    host:'us-cdbr-east-05.cleardb.net',
    user:'bd2f63e7d9fe54',
    password:'86376463',
    database:'heroku_7ac217129fb7350'
});

pool.getConnection(function(err, connection) {
    console.log(err);
    connection.destroy();
});

module.exports = pool;