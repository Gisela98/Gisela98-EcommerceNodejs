const { DataTypes, UUIDV4} = require('sequelize');
const db = require('../../config/connection/connectBD');
const { Product } = require('../product/model');
const { Cart } = require('../cart/model');
const { Order } = require('../order/model');

sequelize = db.sequelize;

const User = sequelize.define('User', {
  id: {
    type: DataTypes.STRING,
    defaultValue: UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull:  false,
    unique: true
  }
},{
  tableName: "users",
  timestamps: true
});
/**
 * User Associations 
 */
User.hasMany(Product);
Product.belongsTo(User);

User.hasOne(Cart);
Cart.belongsTo(User);

User.hasMany(Order);
Order.belongsTo(User);

module.exports = { User };