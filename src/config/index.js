const Sequelize = require('sequelize');
require('dotenv').config();

// set production variable. This will be called when deployed to a live host
const isProduction = process.env.NODE_ENV === 'production';

// configuration details
const connectionString = `postgresql://${process.env.USERNAME}:${process.env.PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;


const sequelizeOptions = {
  dialect: 'postgres',
  logging: isProduction ? false : true, // Disable logging in production
};

if (isProduction) {
  // Use connection string in production
  sequelizeOptions.dialectOptions = {
    connectionString: connectionString,
  };
} else {
  // Use individual properties for development
  sequelizeOptions.host = process.env.DB_HOST;
  sequelizeOptions.database = process.env.DB_DATABASE;
  sequelizeOptions.username = process.env.USERNAME;
  sequelizeOptions.password = process.env.PASSWORD;
  sequelizeOptions.port = process.env.DB_PORT;
}

module.exports = sequelize;

