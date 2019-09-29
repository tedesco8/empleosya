exports.mostrarTrabajos = (req, res) => {
    res.render('home', {
        nombrePagina: 'EmpleosYa',
        tagline: 'Encuentra y publica empleos. EmpleosYa es la manera más rápida de conectar profesionales',
        barra: true,
        boton: true
    })
} 