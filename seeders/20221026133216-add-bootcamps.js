'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('People', [{
        name: 'PHP AVANZADO',
        description: 'Curso de php avanzado',
        webside: 'www.phpavanzado.com',
        phone: '573172632842',
        average_rating

      }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
