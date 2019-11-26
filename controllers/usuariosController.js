const mongoose = require('mongoose');
const Usuarios = mongoose.model('Usuarios');

exports.formCrearCuenta = (req, res) => {
    res.render('crear-cuenta', {
        nombrePagina: 'Crea tu cuenta en EmpleosYa',
        tagline: 'Publica tus vacantes de forma gratuita'
    })
}

exports.validarRegistro = (req, res, next) => {
    
    //sanitizar
    req.sanitizeBody('nombre').escape();
    req.sanitizeBody('email').escape();
    req.sanitizeBody('password').escape();
    req.sanitizeBody('confirmar').escape();
    
    //validar
    req.checkBody('nombre', 'El nombre es obligatorio').notEmpty();
    req.checkBody('email', 'Debe ingresar un email valido').isEmail();
    req.checkBody('password', 'El password no puede ir vacia').notEmpty();
    req.checkBody('confirmar', 'Confirmar password, no debe ir vacio').notEmpty();
    req.checkBody('confirmar', 'Debe ingresar el mismo password').equals(req.body.password);

    const errores = req.validationErrors();

    if(errores){
        req.flash('error', errores.map(error => error.msg));

        res.render('crear-cuenta', {
            nombrePagina: 'Crea tu cuenta en EmpleosYa',
            tagline: 'Publica tus vacantes de forma gratuita',
            mensajes: req.flash()
        });
        return;
    }

    next();
}

exports.crearUsuario = async (req, res, next) => {
    const usuario = new Usuarios(req.body);

    try {
        await usuario.save();
        res.redirect('/iniciar-sesion');
    } catch (error) {
        req.flash('error', error);
        res.redirect('/crear-cuenta');
    }
    if(!nuevoUsuario) return next();
}

exports.formIniciarSesion = (req, res) => {
    res.render('iniciar-sesion', {
        nombrePagina: 'Inicia sesión en EmpleosYa'
    })
}