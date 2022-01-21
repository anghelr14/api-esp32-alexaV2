const express = require('express');
const router = express.Router();

/*===== Importar el controlador =====*/
const controlador = require('../controllers/controller');

module.exports = function () {
    /*===== Ruta para el home =====*/
    router.get('/', controlador.controlador);
    router.get('/api/users',controlador.users)
    router.get('/api/users/:id',controlador.usersid)

    return router;
}