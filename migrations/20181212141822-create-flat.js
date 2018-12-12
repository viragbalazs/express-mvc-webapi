'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('flats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      floorArea: {
        type: Sequelize.INTEGER
      },
      country: {
        type: Sequelize.STRING
      },
      zip: {
        type: Sequelize.INTEGER
      },
      city: {
        type: Sequelize.STRING
      },
      street: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('flats');
  }
};