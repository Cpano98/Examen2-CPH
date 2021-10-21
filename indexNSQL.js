const express = require("express")
const mongoose = require("mongoose")

    //const pokemonRoutes = require("./routes/pokemon")
const app= express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
    // app.use("/pokemon",pokemonRoutes)

mongoose.connect('mongodb://userX:root@3.94.165.232:27017/baseX?authSource=admin')
.then(()=>{
    app.listen(8080,()=>console.log("Servidor en línea"))
})
.catch(err=>console.log(err))