'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    //crear la columna 'user_id' FK con users
    //addColumn: parameros:
    //  1. Tabla en la cual se debe poner la columna
    //  2. Nombre de la nueva columna    
    //  3. Opciones de la nueva columna 
    await queryInterface.addColumn('courses',
                                    'bootcamp_id',
                                     {
                                      //Tipo de dato
                                      type: Sequelize.INTEGER,
                                      references:{
                                        model:'bootcamps',
                                        key: 'id'
                                      },        
                                      //En caso de actualizar o borrar que hacer con el ID                              
                                      onUpdate:'CASCADE',
                                      onDelete:'SET NULL'

                                     })

  },

  async down (queryInterface, Sequelize) {
    //metodo remove Column
    //parametros: 
    //  1. La tabla de donde vas a remover
    //  2. La columna a eliminar
    await queryInterface.removeColumn('courses', 'bootcamp_id')

  }
};
