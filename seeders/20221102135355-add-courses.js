'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('courses', [{
       title: 'Java Avanzado',
       description: 'Curso avanzado de JS - NodeJs',
       weeks: '10',
       enroll_cost:'1000',
       minimun_skill:'JS Basico',
       bootcamp_id:1
     },
     {
      title: 'Java - SpringBoot',
      description: 'Inducción a SpringBoot',
      weeks: '2',
      enroll_cost:'500',
      minimun_skill:'Java avanzado',
      bootcamp_id:1
    },
    {
      title: 'SQL - MySQL',
      description: 'Inducción a MYSQL',
      weeks: '4',
      enroll_cost:'5000',
      minimun_skill:'Conocimientos básicos de UML',
      bootcamp_id:1
    },
    {
      title: 'MongoBD',
      description: 'Inducción a MongoDB',
      weeks: '6',
      enroll_cost:'5000',
      minimun_skill:'Conocimientos básicos de JSON',
      bootcamp_id:1
    }
    
   ], {});
 },

 async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('courses', null, {});

 }
};
