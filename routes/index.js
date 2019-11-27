const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const vacantesController = require('../controllers/vacantesController');
const usuariosController = require('../controllers/usuariosController');
const authController = require('../controllers/authController');

module.exports = () => {
    router.get('/', homeController.mostrarTrabajos);
    router.get('/vacantes/nueva',
        authController.verificarUsuario, 
        vacantesController.formularioNuevaVacante
    );
    router.post('/vacantes/nueva', 
        authController.verificarUsuario,
        vacantesController.agregarVacante
    );
    router.get('/vacantes/:url', vacantesController.mostrarVacante);
    router.get('/vacantes/editar/:url', 
        authController.verificarUsuario,
        vacantesController.formEditarVacante
    );
    router.post('/vacantes/editar/:url', 
        authController.verificarUsuario,
        vacantesController.editarVacante
    );
    router.get('/crear-cuenta', usuariosController.formCrearCuenta);
    router.post('/crear-cuenta',
        usuariosController.validarRegistro,
        usuariosController.crearUsuario
    );
    router.get('/iniciar-sesion', usuariosController.formIniciarSesion);
    router.post('/iniciar-sesion', authController.autenticarUsuario);
    router.get('/administracion', 
        authController.verificarUsuario,
        authController.mostrarPanel
    );

    return router;
}