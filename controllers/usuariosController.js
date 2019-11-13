exports.formCrearCuenta = (req, res) => {
    res.render('crear-cuenta', {
        nombrePagina: 'Crea tu cuenta en EmpleosYa',
        tagline: 'Publica tus vacantes de forma gratuita'
    })
}