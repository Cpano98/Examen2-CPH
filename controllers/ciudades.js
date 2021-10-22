const mongoose = require("mongoose")
const Ciudad_lectura = require('../models/ciudades')

exports.postAgregarElemento = async (req,res)=>{
    
    //Se crea nuevo objeto con las características de ID y se agrega a la base
    const elemento = new elemento(req.body)
    elemento._id = new mongoose.Types.ObjectId()

    //Verificación de repetición
    const Elemento_Repetido = await Ciudad_lectura.findOne({ 
            contador_Interes_busqueda : req.body.contador_Interes_busqueda,
            pais : req.body.pais
    });
    
    if (Elemento_Repetido === null) {
        try{
            //Búsqueda de elemento en colección de la base creada 
            elemento.contInteres=1
            await elemento.save()
            console.log(elemento)
            console.log("Elemento agregado correctamente.")
            res.send({operacion:"correcto"})
        }catch(err){
            console.log(err)
            res.send({operacion: "La operación no se pudo completar"})
        }

    }else{
        await Ciudad_lectura.findOneAndUpdate({ 

            contador_Interes_busqueda : req.body.contador_Interes_busqueda,
            pais : req.body.pais

        },{contInteres:Elemento_Repetido.contInteres+1})

        console.log("Esta ciudad ya ha sido agregada. Puedes buscarla")
        res.json({estado:"Se incrementará algoritmo de búsqueda"})
    }
}

exports.getObtenerElemento=async (req,res)=>{
    const lug = await Ciudad_lectura.find({pais:req.body.pais})
    console.log("Get elemento")
    console.log(lug)
    res.json(lug)
}