
const mongoose = require('mongoose');
//const { schema } = require('./alumno');

//const Alumno = mongoose.model('Alumno');

const expedienteSchema = new mongoose.Schema({


    curso: {
        type: String,
        required: true
    },
    asignaturas: [{
        
        nombreAsignatura: {
            type: String,
            
        },       
        notaPractica:{
            type: Number
        },
        notaTeorica:{
            type: Number
        },
        
    }]

})

module.exports = mongoose.model('Expediente', expedienteSchema);