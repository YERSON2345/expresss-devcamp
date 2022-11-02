'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('bootcamps', [{
        name: 'PHP AVANZADO',
        description: 'Curso de php avanzado',
        website: 'www.phpavanzado.com',
        phone: '573172632842',
        average_rating:'10',
        average_cost:'10000',
        user_id: 1
      },
      {
        name: 'JAVASCRIPT',
        description: 'Curso de JS avanzado',
        website: 'www.JS.com',
        phone: '573172632842',
        average_rating:'10',
        average_cost:'10000',
        user_id: 1

      },
      {
        name: 'C#',
        description: 'Curso de C# Básico',
        website: 'www.C#.com',
        phone: '386423642',
        average_rating:'8',
        average_cost:'20000',
        user_id: 1

      }
    ], {});
  },

  async down (queryInterface, Sequelize) {

      await queryInterface.bulkDelete('bootcamps', null, {});

  }
};
