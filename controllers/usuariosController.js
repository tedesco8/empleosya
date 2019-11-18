const mongoose = require('mongoose');
const Usuarios = mongoose.model('Usuarios');

exports.formCrearCuenta = (req, res) => {
    res.render('crear-cuenta', {
        nombrePagina: 'Crea tu cuenta en EmpleosYa',
        tagline: 'Publica tus vacantes de forma gratuita'
    })
}

exports.crearUsuario = async (req, res, next) => {
    const usuario = new Usuarios(req.body);

    const nuevoUsuario = await usuario.save();

    if(!nuevoUsuario) return next();
    
    res.redirect('/iniciar-sesion');
}