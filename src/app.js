import express from "express";
import cors from "cors";

import {db} from "../database/conexion.js"

const app = express();
import {crear,encontrarId,encontrarTodo,actualizarData,eliminar,eliminarTodo} from "../controladores/mascotasControlador.js";


//checking if dtabase is successfuly connected or not
db.authenticate().then(() => {
    console.log(`Base de Datos conectada de manera correcta...`);
}).catch(err => {
    console.log(`Error al conectarse a la Base de Datos >>  ${err}`);
})
// parse requests of content-type - application/json 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors("*"));

app.get('/',(req,res)=>{
 res.send("hello world")
});

// create an item in table
  app.post('/create',(req,res)=>{
    crear(req,res)    
  })
//find items by some condition
  app.get('/findall',(req,res)=>{
    encontrarTodo(req,res)
  })
  // find an item with its id
  app.get('/findbyid/:id',(req,res)=>{
    encontrarId(req,res)
  })
  //updating certain item with some conditions
  app.put('/update/:id',(req,res)=>{
    actualizarData(req,res)
  })
  //delete an item with id or some condition
  app.delete('/delete/:id', (req,res)=>{
       eliminar(req,res);
  })
 //delete every item from table
  app.delete('/deleteall', (req,res)=>{
   eliminarTodo(req,res);
  })

const PORT = process.env.PORT || 8000;
db.sync().then(() => {
    app.listen(PORT, console.log(`Server started at http://localhost:${PORT}`));
}).catch(err => console.log("Error: " + err));