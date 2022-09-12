const { Sequelize } = require("sequelize");
const config = require("config");

const { user, name_database, pass, host_database, dialect_database } = config.get("postgres");

/* Conexion a la base de datos */
const database = new Sequelize(name_database, user, pass, {
	host: host_database,
	dialect: dialect_database,
});

module.exports = database;
