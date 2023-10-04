const Sequelize = require('sequelize');
const sequelize = require('../config/index');
const ExampleModel = require('./model');
const UserModel = require('./user')

const model = ExampleModel(sequelize, Sequelize.DataTypes);
const userModel = UserModel(sequelize , Sequelize.DataTypes)

const db = {
  model,
  userModel,
  sequelize,
};

module.exports = db;

