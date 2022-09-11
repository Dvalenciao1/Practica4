const { DataTypes } = require("sequelize");
const database = require("../../service/database");

const InversionModel = database.define(
	"inversions",
	{
		id_inversion: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		fecha_inversion: {
			type: DataTypes.DATE,
			allowNull:false
		},
		valor_inicial: {
			type: DataTypes.REAL,
			allowNull: false,
		},
		num_años: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		valor_final: {
			type: DataTypes.REAL,
			allowNull: false,
		},
	},
	{
		timestamps: false
	}
);

module.exports = InversionModel;
