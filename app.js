const express= require('express');

const app=express();

const {infoCursos}=require('./datos/cursos.js')
//Routers
const routerProgramacion = require('./routers/programacion.js')
app.use('/api/cursos/programacion', routerProgramacion);
const routerMatematicas = require('./routers/matematicas.js')
//console.log(routerMatematicas);
app.use('/api/cursos/matematicas', routerMatematicas)
//console.log(infoCursos)
//Routing
app.get('/', (req, res)=>{
res.send('Mi primer servidor. con EXPRESS.....Cursos');
});
app.get('/api/cursos', (req, res)=>{
    res.send(JSON.stringify(infoCursos));
});



const PUERTO=process.env.PORT || 3000;
app.listen(PUERTO, ()=>{
    console.log(`servidor escuchando,  en el puerto ${PUERTO}`)
});