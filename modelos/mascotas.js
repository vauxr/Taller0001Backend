import Sequelize from "sequelize"
import {db} from "../database/conexion.js"
const mascotas =  db.define("mascotas",{
 id:{
 type:Sequelize.INTEGER,
 autoIncrement:true,
 allowNull:false, // coloumn can't be empty
 primaryKey:true // id coloumn will act as primary key
 },
 nombre:{
  type:Sequelize.STRING,
  allowNull:false

 },
 edad:{
  type:Sequelize.INTEGER,
  allowNull:false
 }
})
export  {mascotas};