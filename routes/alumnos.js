const express = require('express');
const router = express.Router();
const Alumno = require('../models/alumno');
//const Expediente = require('../models/expediente');

router.get('/', async ( req,res)=>{
    try{
        const alumnUno = await Alumno.find();
        res.json(alumnUno);
    }catch{
        res.send("Error " + err);
    }
})

router.post('/', async(req, res) =>{
    const alumno = new Alumno({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        sexo: req.body.sexo,    
    })
    try{
        const alumnUno = await alumno.save();
        res.json(alumnUno);
    }catch(err){
        res.send("Error " + err);
    }
})

module.exports = router;