const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const Usuarios = mongoose.model('Usuarios');

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
    }, async (email, password, done) => {
        const usuario = await Usuarios.findOne({email: email});
        //Si el email existe continua la ejecucion, de lo contrario envia error
        if(!usuario) return done(null, false, {
            message: 'El usuario no exíste'
        });
        const verificarPass = usuario.compararPassword(password);
        //la funcion del modelo compararPassword retorna true o false
        if(!verificarPass) return done(null, false, {
            message: 'El password es incorrecto'
        });
        //el usuario existe y el password es correcto
        //no retornamos ningun error y si el usuario logueado
        return done(null, usuario);
}));

//serializamos y tomamos el id del usuario
passport.serializeUser((usuario, done) => done(null, usuario._id));
//deserializamos y y buscamos el id del usuario
passport.deserializeUser(async (id, done) => {
    const usuario = await Usuarios.findById(id);
    return done(null, usuario);
});

module.exports = passport;