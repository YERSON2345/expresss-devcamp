const sequelize = require('./seq')
const colors = require('colors')
const {DataTypes} = require('sequelize')

//Crear instacia del modelo User
const UserModel= require('../models/user')
const User = UserModel(sequelize,DataTypes)


//definir funcion para conecarnos a la base de datos

const connectDB = async ()=>{

    try {
    //conectarse a la db
    await sequelize.authenticate()
    console.log('conectado a mysql'.random)

        // Create a new user
        const jane = await User.create
        ({ 
            name: "calentito", 
            email: "calentada.yahoot.eu",
            password: "calenton" 
        });
        console.log("Jane's auto-generated ID:", jane.id);


    } catch (error) {
        console.log(error)
    }

}

connectDB()
