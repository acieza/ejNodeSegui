const express = require('express');
//const alumno = require('../models/alumno');
const router = express.Router();
const Alumno = require('../models/alumno');
const Expediente = require('../models/expediente');

router.get('/', async ( req,res)=>{
    try{
        const expedienteUno = await Expediente.find();
        res.json(expedienteUno);
    }catch{
        res.send("Error " + err);
    }
})

router.get('/todos', async ( req,res)=>{
    try{
        const expediente = await Expediente.find( {}, function(err,expediente) {
            Alumno.populate(expediente, {path: 'alumno'}, function(err, espediente){
                res.status(200).send(expediente);
            })
        });
        res.json(expediente);
    }catch{
        res.send("Error " + err);
    }
})

router.post('/', async(req, res) =>{
    const expediente = new Expediente({
        curso: req.body.curso,
        alumno: req.body.alumno,
        asignaturas: req.body.asignaturas
    })
    try{
        const expedienteUno = await expediente.save();
        res.json(expedienteUno);
    }catch(err){
        res.send("Error " + err);
    }
})

module.exports = router;