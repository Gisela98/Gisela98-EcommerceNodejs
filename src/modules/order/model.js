const { DataTypes, UUIDV4 } = require('sequelize');
const db = require("../../config/connection/connectBD");
const { User } = require('../user/model');

const sequelize = db.sequelize;

const Order = sequelize.define('Order', {
	id: {
    type: DataTypes.STRING,
    defaultValue: UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
	totalPrice: {
		type: DataTypes.FLOAT,
		allowNull: false
	},
	status: {
		type: DataTypes.BOOLEAN,
		defaultValue: false,
	},
	userId: {
		type: DataTypes.STRING,
		allowNull: false,
		references: {
			model: User,
			key: 'id',
		}
	},
}, {
	tableName: 'orders',
	timestamps: true
})

module.exports = {
	Order
}