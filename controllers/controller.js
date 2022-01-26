exports.controlador = (req, res) => {
    res.render('index');
}
exports.users = (req, res) => {
    const pool = require('../db.js');

    const query = 'SELECT * FROM users';
    pool.query(query, (err,rows,fields)=>{
        if(!err){
            res.json(rows);
        } else {
            console.log(err);
        }
    });
}

exports.userName = (req, res) => {
    const pool = require('../db.js');

    
    const {name} = req.params;
    const query = 'SELECT * FROM users WHERE first_name= ? '
    pool.query(query,[name], (err,rows,fields)=>{
        if(!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    })

}

exports.userId = (req, res) => {
    const pool = require('../db.js');

    
    const {id} = req.params;
    const query = 'SELECT * FROM users WHERE id= ? '
    pool.query(query,[id], (err,rows,fields)=>{
        if(!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    })

}

exports.matricula = (req, res) => {
    const pool = require('../db.js');

    
    const {matricula} = req.params;
    const query = 'SELECT * FROM users WHERE registration= ? '
    pool.query(query,[matricula], (err,rows,fields)=>{
        if(!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    })

}


exports.devices = (req, res) => {
    const pool = require('../db.js');

    const query = 'SELECT * FROM devices';
    pool.query(query, (err,rows,fields)=>{
        if(!err){
            res.json(rows);
        } else {
            console.log(err);
        }
    });
}


exports.nombreDevices = (req, res) => {
    const pool = require('../db.js');
    
    const {nombre} = req.params;
    const query = 'SELECT * FROM devices WHERE name= ? '
    pool.query(query,[nombre], (err,rows,fields)=>{
        if(!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    })

}






