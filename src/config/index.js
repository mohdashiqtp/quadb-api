const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  database: 'postgres',
  username: 'postgres',
  password: "9072553698",
  port: 5432,
  logging: true,
});

module.exports = sequelize;

