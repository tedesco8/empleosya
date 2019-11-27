const passport  = require('passport');
const mongoose  = require('mongoose');
const Vacante = mongoose.model('Vacante');


exports.autenticarUsuario = passport.authenticate('local', {
    successRedirect: '/administracion',
    failureRedirect: '/iniciar-sesion',
    failureFlash: true
});

exports.verificarUsuario = (req, res, next) => {
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/iniciar-sesion');
}

exports.mostrarPanel = async (req, res) => {

    //consultar usuario autenticado
    const vacantes = await Vacante.find({autor: req.user._id});

    res.render('administracion', {
        nombrePagina: 'Panel de Administración',
        tagline: 'Crea y Administra tus Vacantes desde aquí',
        vacantes
    })
}