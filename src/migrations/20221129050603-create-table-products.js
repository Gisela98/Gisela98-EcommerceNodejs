'use strict';
const { UUIDV4 } = require('sequelize');
const { User } = require('../modules/user/model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        type: Sequelize.DataTypes.STRING,
        defaultValue: UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      price: {
        type: Sequelize.DataTypes.FLOAT,
        allowNull: false
      },
      availablaQty: {
        type: Sequelize.DataTypes.STRING,
      },
      userId: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        references: {
          model: User,
          key: 'id',
        }
      },
      createdAt: {
        type: Sequelize.Sequelize.DataTypes.STRING,
        defaultValue: new Date(),
      },
      updatedAt: {
        type: Sequelize.Sequelize.DataTypes.STRING,
        defaultValue: new Date(),
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
  }
};
