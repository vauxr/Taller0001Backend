import Sequelize  from "sequelize";
import {mascotas} from "../modelos/mascotas.js"
 // create a data in table
  const crear = (req, res) => {
    //checck if name is empty send error message 
    console.log(req)
    if (!req.body.nombre) {
           res.status(203).send({
             message: "EL nombre no puede estar vacio!"
           });
           return;
         } 
         //creating a dataset oject to store all queries 
       const dataset = {
           nombre: req.body.nombre,
           edad: req.body.edad         };
        //implementing create function 
       mascotas.create(dataset).then(result => {
           res.send("Registro Creado Correctamente");
         }).catch(err => {
           res.status(500).send({
             message: err.message || "Algún error ocurrio durante la creación del Registro."
           });
         });

  }
  //find all data from a table
   const buscar = (req,res)=>{
   
   //implementing create function 
   mascotas.findAll().then(result => {
       res.send(result)
     }).catch(err => {
      res.status(500).send({
        message: err.message || "No se encontraron Datos"
      });
    });
    
}
  //find a data by ID
   const buscarId = (req,res)=>{
    //getting a condition 
    const id  =  req.params.id
     if(id ==  null ){
       res.status(203).send({
         message: "Id can not be empty!"
       });
       return;
     }
   //implementing findByPk() function 
   mascotas.findByPk(id).then(result => {
     console.log(result)
       res.send(result)
     }).catch(err => {
      res.status(500).send({
        message: err.message || "not found"
      });
    }); 
   }

  // update an existing data
  const actualizar= (req,res)=>{
  const id  =  req.params.id
   const nombre = req.body.nombre;
   const edad =  req.body.edad;
  if(id == null ){
    res.status(203).send({
      message: "Debe ingresar un ID!"
    });
    return;
  }
  mascotas.update({nombre:nombre, edad:edad },{where:{id:id}} ).then(result=>{
    res.send('Registro actualizado')
  })
 }
  

 //delete a data from table
 const eliminar = (req,res)=>{
    //getting id to delete a data
    const id  =  req.params.id
    console.log(`El id es >> ${id}`);
     if(id ==  null ){
       res.status(203).send({
         message: "Debe ingresar un ID!"
       });
       return;
     }
   //implementing delete function 
   mascotas.destroy({where:{id:id}}).then(result => {
       res.status(200).send(`Registro con ID = ${id} Borrado de manera correcta`)
     }).catch(err => {
      res.status(500).send({
        message: err.message || `Error `
      });
    });
   }
  
    //delete all data from table 
  const eliminarTodo = (req,res)=>{
    mascotas.destroy({where: {},
      truncate: false}).then(result => {
      res.status(200).send(`Todos los registros se borraron de manera correcta`)
    }).catch(err => {
     res.status(500).send({
       message: err.message || `Error `
     });
   });
  }

  export {crear,buscarId,buscar,actualizar,eliminar,eliminarTodo}


