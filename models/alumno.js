const { ENETUNREACH } = require('constants');
const mongoose = require('mongoose');

const alumnoSchema = new mongoose.Schema({

    nombre:{
        type:String,
        required:true
    },
    apellido:{
        type:String,
        required:true
    },
    sexo:{
        type: String,
        enum: ['Masculino','Femenino','otro'],
        default:'Masculino',
        required: true
    }

})

module.exports = mongoose.model('Alumno', alumnoSchema);