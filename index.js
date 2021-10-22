//Requerimientos Express
const express = require("express")
const mongoose = require("mongoose")

const ciudadRoutes = require("./routes/ciudades")
const app= express()

//Uso de App -- Creacion
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/ciudades",ciudadRoutes)


mongoose.connect('mongodb://userX:root@3.94.165.232:27017/baseX?authSource=admin')
.then(()=>{
    //Listen Servidor Interno
    app.listen(8080,()=>console.log("El servidor esta en línea. XD Ya, 100 profe"))
})
.catch(err=>console.log(err))