const { DataTypes, UUIDV4 } = require('sequelize');
const db = require("../../config/connection/connectBD");
const { Order } = require('./model');
const { Product } = require('../product/model');


const sequelize = db.sequelize;

const ProductInOrder = sequelize.define('ProductInOrder', {
	id: {
    type: DataTypes.STRING,
    defaultValue: UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
	price: {
		type: DataTypes.FLOAT,
		allowNull: false
	},
	quantity: {
		type: DataTypes.INTEGER,
		defaultValue: 1,
	},
	status: {
		type: DataTypes.INTEGER,
		defaultValue: 0,
	},
	orderId: {
		type: DataTypes.STRING,
		allowNull: false,
		references: {
			model: Order,
			key: 'id',
		}
	},
	productId: {
		type: DataTypes.STRING,
		allowNull: false,
		references: {
			model: Product,
			key: 'id',
		}
	},
}, {
	tableName: 'products_in_orders',
	timestamps: true
});

Product.hasMany(ProductInOrder);
ProductInOrder.belongsTo(Product);

Order.hasMany(ProductInOrder);
ProductInOrder.belongsTo(Order);

module.exports = {
	ProductInOrder
}