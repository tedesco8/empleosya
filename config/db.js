const mongoose = require('mongoose');
require('dotenv').config({path: 'variables.env'});

mongoose.connect(process.env.DATABASE, {useNewUrlParser:true, useUnifiedTopology: true, useCreateIndex: true});

mongoose.connection.on('error', (error) => {
    console.log(error);
})
//importar los modelos
require('../models/Vacantes');
require('../models/Usuarios');