const sequelize = require("../databases/sequelize");
const { DataTypes } = require("sequelize");

const userMovie = sequelize.define("userMovie", {
  dbID: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  uid: {},
});
