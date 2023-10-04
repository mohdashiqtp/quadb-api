const { Sequelize } = require('sequelize');

const User = (sequelize, DataTypes) => {
  const User = sequelize.define('UserModel', {
    user_id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    user_password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_image: {
      type: DataTypes.STRING,
    },
    total_orders: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    last_logged_in: {
      type: DataTypes.DATE,
    },
  }, {
    timestamps: false, 
  });

  return User;
};

module.exports = User;

