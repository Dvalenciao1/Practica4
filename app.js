var express = require("express");
var logger = require("morgan");

var routes = require("./routes/index");

const db = require("./service/database");

var app = express();

app.use(logger("dev"));
app.use(express.json());

app.use("/inversion", routes);

async function connectDB() {
	try {
		await db.authenticate();
		console.log("La conexion de base de datos ha sido establecida: Ok");
	} catch (error) {
		console.log(`La conexion de base de datos ha sido rechazada: ${error}`);
	}
}

connectDB();

module.exports = app;
