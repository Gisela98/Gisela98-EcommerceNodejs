const { DataTypes, UUIDV4 } = require('sequelize');
const db = require("../../config/connection/connectBD");
const { User } = require('../user/model');

const sequelize = db.sequelize;

const Product = sequelize.define('Product', {
	id: {
    type: DataTypes.STRING,
    defaultValue: UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
	name: {
		type: DataTypes.STRING,
		allowNull: false
	},
	price: {
		type: DataTypes.FLOAT,
		allowNull: false
	},
	availablaQty: {
		type: DataTypes.STRING,
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
	tableName: 'products',
	timestamps: true
})

module.exports = {
	Product
}