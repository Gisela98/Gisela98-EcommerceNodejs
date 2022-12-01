'use strict';
const { DataTypes, UUIDV4} = require("sequelize");
const bcrypt = require('bcrypt');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.DataTypes.STRING,
        defaultValue: UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      username: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.DataTypes.STRING,
        allowNull:  false,
        unique: true
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

    await queryInterface.bulkInsert('users', [
      {
        "id": "user-1",
        "email": "admin1@mail.com",
        "username": "testAuth",
        "password": bcrypt.hashSync('Admin1', 10),
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
