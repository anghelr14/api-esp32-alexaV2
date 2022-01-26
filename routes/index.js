const express = require('express');
const router = express.Router();

/*===== Importar el controlador =====*/
const controlador = require('../controllers/controller');

module.exports = function () {
    /*===== Ruta para el home =====*/
    router.get('/', controlador.controlador);
    router.get('/api/users',controlador.users)
    router.get('/api/users/name/:name',controlador.userName)
    router.get('/api/users/id/:id',controlador.userId)
    router.get('/api/users/matricula/:matricula',controlador.matricula)
    router.get('/api/devices',controlador.devices)
    router.get('/api/devices/nombre/:nombre',controlador.nombreDevices)

    return router;
}