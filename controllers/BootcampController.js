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

    //traer los Bootcamps
    const users = await Bootcamp.findAll();

    res.status(200)
    .json({
        "success": true,
        "data": users
    })
}

//Listar Bootcamps por ID
exports.getSingleBootcamp = async (req, res)=>{

    //Traer Bootcamps por id
    const usersid = await Bootcamp.findByPk(req.params.id);

    console.log(req.params.id)
    res.status(200)
    .json({
        "success": true,
        "data":usersid
    })
}
//Actualizar Bootcamp
exports.updateBootcamp = async (req, res)=>{
   const userUpdate = await Bootcamp.update(req.body,{
        where: {
          id: req.params.id
        }
      });
      const usersid = await Bootcamp.findByPk(req.params.id);

    console.log(req.params.id)
    res.status(200)
    .json({
        "success": true,
        "data":usersid
    })
}
//Eliminar Bootcamp
exports.deleteBootcamp = async(req, res)=>{
        //Traer Bootcamp por id
        const usersid = await Bootcamp.findByPk(req.params.id);
        const usersDelete = await Bootcamp.destroy({
            where:{
                id:req.params.id
            }
        }
        );
    console.log(req.params.id)
    res.status(200)
    .json({
        "success": true,
        "data":usersid,
        "mensaje":"Se elimino el usuario correctamente"
    })
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
        "error":errores
    })

  } else{

  } 

}
    

}
