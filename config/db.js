const sequelize = require('./seq')
const colors = require('colors')




//definir funcion para conecarnos a la base de datos

const connectDB = async ()=>{

    try {
    //conectarse a la db
    await sequelize.authenticate()
    console.log('conectado a mysql'.bgBlue)
    
    } catch (error) {
        console.log(error)
    }

}

module.exports = connectDB
