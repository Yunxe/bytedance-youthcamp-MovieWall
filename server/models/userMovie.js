const sequelize = require("../databases/sequelize");
const { DataTypes } = require("sequelize");
const DBMovies = require("./movies")
const User = require("./user")


const UserDBMovies = sequelize.define("UserDBMovies", {
  id: {
    comment: '自增字段(主键)',
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  mid: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references:{
      model:DBMovies,
      key:"dbID"
    }
  },
  uid: {
    type:DataTypes.INTEGER.UNSIGNED,
    allowNull:false,
    references:{
      model:User,
      key:"uid"
    }
  },
});

module.exports = UserDBMovies