//Dependencias
//el objeto de conexión
const sequelize = require('../config/seq')
//Datatypes de sequelize
const { DataTypes, ValidationError } = require('sequelize')
//el modelo
const BootcampModel = require('../models/Bootcamp')


//crear la entidad
const Bootcamp = BootcampModel(sequelize, DataTypes)

//Documentacion para los codigos de CRUD
//https://sequelize.org/docs/v6/core-concepts/model-querying-basics/

//listar todos los Bootcamps
exports.getAllBootcamps = async (req, res)=>{
    try {
        //traer los Bootcamps
        const users = await Bootcamp.findAll();

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

//Listar Bootcamps por ID
exports.getSingleBootcamp = async (req, res) => {
    try {
        const singleUser = await Bootcamp.findByPk(req.params.id);
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
                    "errors": "Bootcamp no existente"
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
   
//Actualizar Bootcamp
exports.updateBootcamp = async (req , res) =>{
     
    try {
    const singleUser = await Bootcamp.findByPk(req.params.id);
     if(!singleUser){
        res
        .status(400)
        .json({
            "success": false,
            "errors":"Bootcamp no existente"
        })
     }else{
        // en caso que actualizo el Bootcamp
        //console.log(req.params.id)
        await Bootcamp.update (req.body,{
        where:{
            id: req.params.id
        }});
        //selecciono Bootcamp actualizado
        const updateUser = await Bootcamp.findByPk(req.params.id);
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
//Eliminar Bootcamp
exports.deleteBootcamp = async (req, res)=>{
    try {
        const SingleUser = await Bootcamp.findByPk(req.params.id);
        if (!SingleUser) {
            res
            .status(400)
            .json({
                "success": false,
                "errors": "Bootcamp no existente"
        })
        } else {
            await Bootcamp.destroy({
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
            "mensaje":"Se elimino el Bootcamp correctamente"
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
//Crear nuevo Bootcamp
exports.createBootcamp = async (req, res)=>{
try {
    res
    const newUser = await Bootcamp.create(req.body);
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

