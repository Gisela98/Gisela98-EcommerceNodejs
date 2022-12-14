const { DataTypes, UUIDV4 } = require('sequelize');
const db = require("../../config/connection/connectBD");
const { Product } = require('../product/model');
const { Cart } = require('./model');


const sequelize = db.sequelize;

const ProductInCart = sequelize.define('ProductInCart', {
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
		type: DataTypes.BOOLEAN,
		defaultValue: false,
	},
	cartId: {
		type: DataTypes.STRING,
		allowNull: false,
		references: {
			model: Cart,
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
	tableName: 'products_in_carts',
	timestamps: true
});

/**
 * ProductInCart Associations
 */

Product.hasMany(ProductInCart);
ProductInCart.belongsTo(Product);

module.exports = {
	ProductInCart
}