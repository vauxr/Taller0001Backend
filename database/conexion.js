import Sequelize  from "sequelize";
//by default  admin and password will be "root" 
const  db =  new Sequelize("mascotas","mascotas","mascotas2023",{
dialect:"mysql",
host:"localhost"//if you are working in local environment put localhost here 
})
export {db}   //export this module to use in app.js