import express from "express";
import cors from "cors";

import {db} from "../database/conexion.js"
import {routerMascotas} from "../rutas/mascotasRouter.js"
const app = express();


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


app.use('/mascotas', routerMascotas);

const PORT = process.env.PORT || 8000;
db.sync().then(() => {
    app.listen(PORT, console.log(`Server started at http://localhost:${PORT}`));
}).catch(err => console.log("Error: " + err));