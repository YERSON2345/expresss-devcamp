//Dependencias
//el objeto de conexión
const sequelize = require('../config/seq')
//Datatypes de sequelize
const { DataTypes } = require('sequelize')
//el modelo
const UserModel = require('../models/user')


//crear la entidad
const User = UserModel(sequelize, DataTypes)

//Documentacion para los codigos de CRUD
//https://sequelize.org/docs/v6/core-concepts/model-querying-basics/

//listar todos los usuarios
exports.getAllUsers = async (req, res)=>{

    //traer los ususarios
    const users = await User.findAll();

    res.status(200)
    .json({
        "success": true,
        "data": users
    })
}

//Listar usuarios por ID
exports.getSingleUser = async (req, res)=>{

    //Traer usuario por id
    const usersid = await User.findByPk(req.params.id);

    console.log(req.params.id)
    res.status(200)
    .json({
        "success": true,
        "data":usersid
    })
}
//Actualizar usuario
exports.updateUser = async (req, res)=>{
   const userUpdate = await User.update(req.body,{
        where: {
          id: req.params.id
        }
      });
      const usersid = await User.findByPk(req.params.id);

    console.log(req.params.id)
    res.status(200)
    .json({
        "success": true,
        "data":usersid
    })
}
//Eliminar usuario
exports.deleteUser = async(req, res)=>{
        //Traer usuario por id
        const usersid = await User.findByPk(req.params.id);
        const usersDelete = await User.destroy({
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
//Crear nuevo usuario
exports.createUser = async (req, res)=>{

    res
    const newUser = await User.create(req.body);
    res.status(200)
    .json({
        "success": true,
        "data":newUser
    })
}
