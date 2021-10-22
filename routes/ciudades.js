//Llamando express
const router = require('express').Router()
//Requiriendo archivo de controllers
const ControllerCRUD = require('../controllers/ciudades')

router.post('/agregarElemento',ControllerCRUD.postAgregarElemento)
router.get('/obtenerElemento',ControllerCRUD.getObtenerElemento)


//Exportamos el router para ser leído en otras aplicaciones
module.exports=router