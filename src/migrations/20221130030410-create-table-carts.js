'use strict';
const { UUIDV4 } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('carts', {
      id: {
        type: Sequelize.DataTypes.STRING,
        defaultValue: UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      price: {
        type: Sequelize.DataTypes.FLOAT,
        allowNull: false
      },
      quantity: {
        type: Sequelize.DataTypes.INTEGER,
        defaultValue: 1,
      },
      status: {
        type: Sequelize.DataTypes.INTEGER,
        defaultValue: 0,
      },
      cartId: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        references: {
          model: 'carts',
          key: 'id',
        }
      },
      productId: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        references: {
          model: 'products',
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
    await queryInterface.dropTable('carts');
  }
};
