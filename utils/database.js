const Sequelize = require("sequelize")
const { aplicarRelaciones } = require('./relations')

//Conexion Base de datos
const sequelize = new Sequelize('Base_Nashe', 'user5', 'root', {
    dialect: 'mysql',
    host: '18.234.222.26',
    define: {
        timestamps: false,
        freezeTableName: true
    }
})

const modelDefiners = [
    require('../models/ciudades'),
]

for (const modelDefiner of modelDefiners) {
    modelDefiner(sequelize)
}

aplicarRelaciones(sequelize)
module.exports = sequelize