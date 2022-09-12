require("dotenv").config();

/* Configuraciones predeterminadas para la aplicacion */
module.exports = {
	server: {
		port: process.env.PORT,
		domain: process.env.DOMAIN,
	},

	postgres: {
		user: process.env.USER,
		name_database: process.env.DATABASE,
		pass: process.env.PASS,
		host_database: process.env.HOST,
		dialect_database: process.env.DIALECT,
	},
};
