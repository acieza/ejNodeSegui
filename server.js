const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const url = 'mongodb://localhost:27017/escuela'

const app = express()
;

mongoose.connect(url, { useNewUrlParser: true });
const conexion = mongoose.connection;

conexion.on('open',()=>{
    console.log('***** CONECTADO A BD *****');
});

app.use(cors());
app.use(express.json());

const alumnosRouter = require('./routes/alumnos');
//const { Router } = require('express');
app.use('/alumnos', alumnosRouter);

const expedientesRouter = require('./routes/expedientes');
app.use('/expedientes', expedientesRouter);





app.listen(3000, ()=>{
    console.log('***** SERVER CONNECT *****');
})
