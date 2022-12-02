'use strict';
const { UUIDV4 } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('products_in_carts', {
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
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: false,
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
        type: Sequelize.DataTypes.STRING,
        defaultValue: new Date(),
      },
      updatedAt: {
        type: Sequelize.DataTypes.STRING,
        defaultValue: new Date(),
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('products_in_carts');
  }
};
