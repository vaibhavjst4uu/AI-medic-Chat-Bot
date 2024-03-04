'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('doctor_details', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.ENUM
      },
      contact: {
        type: Sequelize.STRING
      },
      bio: {
        type: Sequelize.STRING
      },
      specialisation: {
        type: Sequelize.STRING
      },
      practice_name: {
        type: Sequelize.INTEGER
      },
      availability: {
        type: Sequelize.STRING
      },
      consultation_fee: {
        type: Sequelize.INTEGER
      },
      rating: {
        type: Sequelize.TINYINT
      },
      feedback: {
        type: Sequelize.TEXT
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('doctor_details');
  }
};