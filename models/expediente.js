
const mongoose = require('mongoose');
//const { schema } = require('./alumno');

//const Alumno = mongoose.model('Alumno');

const expedienteSchema = new mongoose.Schema({


    curso: {
        type: String,
        required: true
    },
    alumno: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "Alumno"
    }

})

module.exports = mongoose.model('Expediente', expedienteSchema);