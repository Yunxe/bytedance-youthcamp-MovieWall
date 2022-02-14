const dbConfig = require("../config").db
const {Sequelize} = require("sequelize");

const sequelize = new Sequelize(dbConfig.name, dbConfig.username, dbConfig.password, {
    host: dbConfig.host,
    dialect: "mysql",
    timezone: "+08:00",
    define: {
        charset: 'utf8',
        dialectOptions: {
            collate: 'utf8_general_ci'
        }
    }
});

module.exports = sequelize