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

exports.usersid = (req, res) => {
    const pool = require('../db.js');

    
    const {id} = req.params;
    const query = 'SELECT * FROM users WHERE id = ?';
    pool.query(query,[id], (err,rows,fields)=>{
        if(!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    })

}