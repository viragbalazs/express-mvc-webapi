'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Flats', [
      {
        title: 'elsoCim',
        price: 10000,
        floorArea: 25,
        country: 'Hungary',
        zip: 6710,
        city: 'Kukutyin',
        street: 'Fo utca 1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'masodikCim',
        price: 200000,
        floorArea: 70,
        country: 'Hungary',
        zip: 5871,
        city: 'Város2',
        street: 'Fo utca 2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'harmadikCim',
        price: 400000,
        floorArea: 61,
        country: 'Hungary',
        zip: 9571,
        city: 'Varos 3',
        street: 'Fo utca 3',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
