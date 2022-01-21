const mysql = require('mysql');
const e = require("express");

var pool = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'root',
    database:'apiesp32alexa'
});

pool.getConnection(function(err, connection) {
    console.log(err);
    connection.destroy();
});

module.exports = pool;