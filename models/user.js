'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        unique(value) {
          
          return User.findOne({where:{name:value}})
            .then((name) => {
              if (name) {
                throw new Error('Error hay mas de un nombre asi');
              }
            })
        },
        notNull: {
          args:true,
          msg: "El campo name debe estar presente"
        },
        notEmpty: {
          args:true,
          msg:"name no debe estar vacio"
        },
      }
    },
    email:{
      type:DataTypes.STRING,
      validate:{
        isEmail:{
          args:true,
          msg:"Email no valido"
        }
      },
    },
    password:{
      type:DataTypes.STRING,
      validate:{
        len:{
          args:[5,10],
          msg:"Password min 5 caracteres, max 10 caracteres"
        } 
      }
    }
  }, {
    sequelize,
    modelName: 'User',
    timestamps: false
  });

  return User;
};