const passport  = require('passport');


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

exports.mostrarPanel = (req, res) => {
    res.render('administracion', {
        nombrePagina: 'Panel de Administración',
        tagline: 'Crea y Administra tus Vacantes desde aquí'
    })
}