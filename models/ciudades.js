const mongoose = require('mongoose')

// Define schema
const CiudadesSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    
    ciudad:{
        type:String,
        required: true
    },
    numero:Number,
    tipo:{
        type:[String]
    },
    descripcion:{
        type:String,
        required: false
    }

},{collection:'ciudades'})


// Compile model from schema
module.exports = mongoose.model('ciudades', CiudadesSchema )