var Sequelize = require('sequelize')
const config = require('../env')

var sequelize = new Sequelize(config.DB_NAME, 
    config.DB_USER,
    config.DB_PASS, 
    {
        host: config.DB_HOST,
        dialect: 'mysql',
        dialectOptions: {
            charset: 'utf8mb4'
        },
    }
);


var db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;