const mongoose = require('mongoose')

// Define schema
const CiudadesSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    ciudad:{
        type:String,
        required: true
    },
    numero_cd:{
        type:String,
        required: true
    },
    atraccion_ciudad:{
        type:String,
        required: true
    },
    contador:{
        type:Number
    }
},{collection:'ciudades'})


// Compile model from schema
module.exports = mongoose.model('ciudades', CiudadesSchema )