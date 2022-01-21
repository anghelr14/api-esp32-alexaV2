const express = require('express');
const router = express.Router();

/*===== Importar el controlador =====*/
const controlador = require('../controllers/controllers');

module.exports = function () {
    /*===== Ruta para el home =====*/
    router.get('/', controlador.controlador);


    return router;
}