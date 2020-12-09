const { ENETUNREACH } = require('constants');
const mongoose = require('mongoose');

const alumnoSchema = new mongoose.Schema({

    nombre:{
        type:String,
        
    },
    apellido:{
        type:String,
        
    },
    sexo:{
        type: String,
        enum: ['Masculino','Femenino','otro'],
        default:'Masculino',
        
    },
    expediente: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "Expediente"
    }

})

module.exports = mongoose.model('Alumno', alumnoSchema);

