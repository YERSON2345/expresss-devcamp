'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('users', [
        {
        name: 'elverdades',
        email: 'elverdaderasverdades@misena.edu.co',
        password: 'basadoenhechos'
      },
      {
        name: 'elyerson',
        email: 'elyerson@misena.edu.co',
        password: 'muybuenas'
      },
      {
        name: 'elisabeth',
        email: 'elisabethasd@misena.edu.co',
        password: 'a?'
      },
      {
        name: 'elproblemas',
        email: 'elproblemas@misena.edu.co',
        password: 'muchosproblemas'

      }], {});

  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('users', null, {});

  }
};
