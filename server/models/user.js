const sequelize = require("../databases/sequelize");
const { DataTypes } = require("sequelize");

const User = sequelize.define("User", {
  uid: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
  },
  userName: {
    type: DataTypes.STRING(60),
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
});

module.exports = User;
