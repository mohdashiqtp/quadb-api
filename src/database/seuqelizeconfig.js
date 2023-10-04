const Sequelize = require('sequelize');
const ConfigDatabase = require('../config');

const sequelize = new Sequelize(ConfigDatabase);


module.exports = sequelize;

