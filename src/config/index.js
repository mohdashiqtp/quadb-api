const Sequelize = require('sequelize');
require('dotenv').config();

// Set up the PostgreSQL connection string
const connectionString = "postgres://default:WJZzQyTr50tB@ep-rapid-forest-95611418.us-east-1.postgres.vercel-storage.com:5432/verceldb";

const sequelize = new Sequelize(connectionString, {
  dialect: 'postgres',
dialectOptions: {
  ssl: true,
},
logging: false,
});

module.exports = sequelize;
