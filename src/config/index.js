const Sequelize = require('sequelize');
require('dotenv').config();

// Set up the PostgreSQL connection string
const connectionString = process.env.DATABASE_URL;

const sequelize = new Sequelize(connectionString, {
  dialect: 'postgres',
dialectOptions: {
  ssl: true,
},
logging: false,
});

module.exports = sequelize;
