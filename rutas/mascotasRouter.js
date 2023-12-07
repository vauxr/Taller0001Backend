import express from "express";
import {crear,buscarId,buscar,actualizar,eliminar,eliminarTodo} from "../controladores/mascotasControlador.js";

const routerMascotas = express.Router();

// middleware that is specific to this router
routerMascotas.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
routerMascotas.get('/',(req,res)=>{
    res.send("Bienvenidos Backend Mascotas")
   });
// create an item in table
routerMascotas.post('/crear',(req,res)=>{
    crear(req,res)    
  })
//find items by some condition
  routerMascotas.get('/buscar',(req,res)=>{
    buscar(req,res)
  })
  // find an item with its id
  routerMascotas.get('/buscarId/:id',(req,res)=>{
    buscarId(req,res)
  })
  //updating certain item with some conditions
  routerMascotas.put('/actualizar/:id',(req,res)=>{
    actualizar(req,res)
  })
  //delete an item with id or some condition
  routerMascotas.delete('/eliminar/:id', (req,res)=>{
       eliminar(req,res);
  })
 //delete every item from table
  routerMascotas.delete('/eliminarTodo', (req,res)=>{
   eliminarTodo(req,res);
  })


export { routerMascotas }