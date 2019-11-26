const passport  = require('passport');


exports.autenticarUsuario = passport.authenticate('local', {
    successRedirect: '/administracion',
    successRedirect: '/iniciar-sesion',
    failureFlash: true
})