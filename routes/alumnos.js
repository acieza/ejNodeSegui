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
router.get('/expediente', async ( req,res)=>{
    try{
        const alumnUno = await Alumno.find()
        .select("_id nombre apellido")
        .populate("expediente","curso asignaturas.nombreAsignatura asignaturas.notaPractica asignaturas.notaTeorica" )
        .exec()
        .then()
        res.json(alumnUno);
    }catch{
        res.send("Error " + err);
    }
})
router.get('/expediente/:id', async ( req,res)=>{
    try{
        const alumnUno = await Alumno.findById(req.params.id)
        .select("_id nombre apellido")
        .populate("expediente","curso asignaturas.nombreAsignatura asignaturas.notaPractica asignaturas.notaTeorica" )
        .exec()
        .then()
        res.json(alumnUno);
    }catch{
        res.send("Error " + err);
    }
})

router.get('/Masculino', async ( req,res)=>{
    try{
        const alumnUno = await Alumno.find({sexo: "Masculino"});
        res.json(alumnUno);
    }catch{
        res.send("Error " + err);
    }
})

router.get('/buscaA/:ape', async ( req,res)=>{
    try{
        const alumnUno = await Alumno.find({apellido: {req.params.ape}});
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
        expediente: req.body.expediente  
    })
    try{
        const alumnUno = await alumno.save();
        res.json(alumnUno);
    }catch(err){
        res.send("Error " + err);
    }
})

module.exports = router;