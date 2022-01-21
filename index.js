const express = require('express');
const routes = require('./routes');
const path = require('path');

/*===== Crear app de express =====*/
const app = express();

/*===== Configuracion =====*/
app.set('port', process.env.PORT || 9000);

/*===== Middlewares =====*/
app.use(express.json());


/*===== Donde cargar los archivos estáticos =====*/
app.use(express.static('public'));


/*===== Habilitar motor de vistas =====*/
app.set('view engine', 'pug');

/*===== Añadir la carpeta de vistas =====*/
app.set('views', path.join(__dirname, './views'));


app.use('/', routes());

/*===== Inciar servidor =====*/
app.listen(app.get('port'), () =>{
    console.log(`Server on port ${app.get('port')}`);
});