const sequelize = require("./index")
const {DataTypes} = require("sequelize");
const User = sequelize.define("User", {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
    },
    username: {
        type: DataTypes.STRING(60),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING(100),
        allowNull: false,
    }
})

module.exports = User