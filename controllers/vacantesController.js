const mongoose = require('mongoose');
const Vacante = mongoose.model('Vacante');

exports.formularioNuevaVacante = (req, res) => {
     res.render('nueva-vacante', {
         nombrePagina: 'Nueva Vacante',
         tagline: 'Llena el formulario y publica tu vacante'
     })
}

//agrega la vacante a la base de datos
exports.agregarVacante = async (req, res) => {
    const vacante = new Vacante(req.body);

    //crear arreglo de skills
    vacante.skills = req.body.skills.split(',');

    //almacenamos en la base de datos
    const nuevaVacante = await vacante.save()
    console.log(nuevaVacante);

    //redireccionar
    res.redirect(`/vacantes/${nuevaVacante.url}`);
}