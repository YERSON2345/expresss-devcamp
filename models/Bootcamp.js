const mongoose = require('mongoose')

//Modelo de bootcamps

const BootcampsSchema = new mongoose.Schema({
    name: {
        type: String,
        required:[
            true,
            "Por favor, ingresa el nombre"
        ],
        unique: true,
        maxlength: [
            30,
            "No se admiten bootcamps mayores a 30"
        ]
    },
    description:{
        type : String,
        required:[
            true,
            "Por facot, ingrese descripcion"
        ],
        maxlength: [
            500,
            "no se admiten descripciones mayores a 500"
        ]
    },
    phone:{
        type: String ,
        maxlength:[
            20,
            "telefonos no mayores a 20"
        ]
    },
    email:{
        type : String,
        match:[
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Por favor ingrese un email valido"
        ]
    },
    averageCost: Number,
    averageRating : {
        type : Number,
        min:[1, "Calificación minima: 1",],
        max:[10, "Calificación maxima:10"]
    }

})

module.exports = mongoose.model('bootcacmp', BootcampsSchema)