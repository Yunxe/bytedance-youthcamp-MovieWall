const sequelize = require("../databases/sequelize");
const DBMovies = require("./movies");
const User = require("./user");
const UserDBMovies = require("./UserMovie");

DBMovies.belongsToMany(User, {
  through: UserDBMovies,
  as: "users",
  foreignKey: "mid",
  onDelete: 'CASCADE',

});
User.belongsToMany(DBMovies, {
  through: UserDBMovies,
  as: "movies",
  foreignKey: "uid",
  onDelete: 'CASCADE',
});

module.exports = { DBMovies, User };
