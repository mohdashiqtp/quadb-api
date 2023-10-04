const Sequelize = require('sequelize');
const sequelize = require('../config/index')
const UserModel = require('./user')
const userModel = UserModel(sequelize , Sequelize.DataTypes)

const db = {
  userModel,
  sequelize,
};

module.exports = db;

