const { DataTypes, UUIDV4} = require('sequelize');
const db = require('../../config/connection/connectBD');
const { User } = require('../user/model');
const { ProductInCart } = require('../product-in-cart/model');
sequelize = db.sequelize;

const Cart = sequelize.define('Cart', {
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
	userId: {
		type: DataTypes.STRING,
		allowNull: false,
		references: {
			model: User,
			key: 'id',
		}
	}
}, {
	tableName: 'carts',
	timestamps: true
});

Cart.hasMany(ProductInCart);
ProductInCart.belongsTo(Cart);

module.exports = { Cart };