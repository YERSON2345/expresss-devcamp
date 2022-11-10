//Dependencias
//el objeto de conexión
const sequelize = require('../config/seq')
//Datatypes de sequelize
const { DataTypes, ValidationError } = require('sequelize')
//el modelo
const ReviewsModel = require('../models/reviews')


//crear la entidad
const Reviews = ReviewsModel(sequelize, DataTypes)

//Documentacion para los codigos de CRUD
//https://sequelize.org/docs/v6/core-concepts/model-querying-basics/

//listar todos los Reviewss
exports.getAllReviews = async (req, res)=>{
    try {
        //traer los Reviews
        const users = await Reviews.findAll();

        res.status(200)
            .json({
                "success": true,
                "data": users
    })
    } catch (error) {
        res
        .status(400)
        .json({
            "success": false,
            "error":"Error de servidor desconocido"
        })
    }
}

//Listar Reviews por ID
exports.getSingleReviews = async (req, res) => {
    try {
        const singleUser = await Reviews.findByPk(req.params.id);
        if (singleUser) {
            res
                .status(200)
                .json({
                    "success": true,
                    "data": singleUser
                })
        } else {
            res
                .status(200)
                .json({
                    "success": false,
                    "errors": "Reviews no existente"
                })
        }
    } catch (error) {
        res
            .status(200)
            .json({
                "success": false,
                "errors": "error del servidor"
            })
    }
}
   
//Actualizar Reviews
exports.updateReviews = async (req , res) =>{
     
    try {
    const singleUser = await Reviews.findByPk(req.params.id);
     if(!singleUser){
        res
        .status(400)
        .json({
            "success": false,
            "errors":"Reviews no existente"
        })
     }else{
        // en caso que actualizo el Reviews
        await Reviews.update (req.body,{
        where:{
            id: req.params.id
        }});
        //selecciono Bootcamp actualizado
        const updateUser = await Reviews.findByPk(req.params.id);
    res
    .status(200)
    .json({
        "success": true,
        "data" : updateUser
    })
}
 } catch (error) {
        res
        .status(400)
        .json({
            "sucess":false,
            "errors":"error de servidor desconocido"

        }) 
    }
    
}
//Eliminar Reviews
exports.deleteReviews = async (req, res)=>{
    try {
        const SingleUser = await Reviews.findByPk(req.params.id);
        if (!SingleUser) {
            res
            .status(400)
            .json({
                "success": false,
                "errors": "Reviews no existente"
        })
        } else {
            await Reviews.destroy({
                where:{
                    id:req.params.id
                }
            }
            );
        console.log(req.params.id)
        res.status(200)
        .json({
            "success": true,
            "data":SingleUser,
            "mensaje":"Se elimino el Reviews correctamente"
        });
    }
} catch (error) {
        res
        .status(400)
        .json({
            "success": false,
            "errors": "Error de servidor desconocido"
        })
    }
}
//Crear nuevo Reviews
exports.createReviews = async (req, res)=>{
try {
    res
    const newUser = await Reviews.create(req.body);
    res.status(200)
    .json({
        "success": true,
        "data":newUser
    })
} catch (error) {

  if(error instanceof ValidationError){
    console.log(error.errors)
    //Recorrer el arreglo de errores
    //map
    const errores = error.errors.map((elemento)=>elemento.message)
    res
    .status(400)
    .json({
        "sucess":false,
        "error":error
    })

  } else{
    res
        .status(400)
        .json({
            "success": false,
            "error":"Error de servidor desconocido"
        })
  } 

}

}

