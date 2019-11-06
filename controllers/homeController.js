const mongoose = require('mongoose');
const Vacante = mongoose.model('Vacante');

exports.mostrarTrabajos = async (req, res, next) => {

    const vacantes = await Vacante.find();

    if(!vacantes) return next();

    res.render('home', {
        nombrePagina: 'EmpleosYa',
        tagline: 'Encuentra y publica empleos. EmpleosYa es la manera más rápida de conectar profesionales',
        barra: true,
        boton: true,
        vacantes
    })
} 