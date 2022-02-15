const sequelize = require("../databases/sequelize");
const { DataTypes } = require("sequelize");

const DBMovies = sequelize.define("DBMovies", {
  dbID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    unique: true,
  },
  chTitle: {
    type: DataTypes.STRING(60),
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING(60),
    allowNull: true,
  },
  dbRank: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  director: {
    type: DataTypes.STRING(80),
    allowNull: false,
  },
  releaseDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  dbScore: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  IMDb: {
    type: DataTypes.STRING(20),
    unique: true,
    allowNull: false,
  },
  detail: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  posterUrl: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = DBMovies;
