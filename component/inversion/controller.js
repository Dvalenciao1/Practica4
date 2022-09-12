const InversionModel = require("./model");

/* Retorna todas las inversiones */
async function getAllInversion() {
	try {
		const inversion = await InversionModel.findAll();
		if (!inversion) return res.sendStatus(400);
		return inversion;
	} catch (error) {
		return { message: error.message };
	}
}

/* Retorna una inversion segun el id */
async function getInversion(id) {
	try {
		const inversion = await InversionModel.findAll({
			where: { id_inversion: id },
		});

		if (!inversion) return res.sendStatus(400);
		return inversion;
	} catch (error) {
		return { message: error.message };
	}
}

/* Crea una nueva inversion en la base de datos */
async function createInversion(inversonBody) {
	try {
		const inversion = await InversionModel.create(inversonBody);

		if (!inversion) return res.sendStatus(400);
		return inversion;
	} catch (error) {
		return { message: error.message };
	}
}

/* Modifica algun dato de la inversion segun el id */
async function updateInversion(id, inversonBody) {
	try {
		const inversion = await InversionModel.update(inversonBody, {
			returning: true,
			where: { id_inversion: id },
		});

		if (!inversion) return res.sendStatus(400);
		return inversion;
	} catch (error) {
		return { message: error.message };
	}
}

/* Elimina la inversion segun el id */
async function deleteInversion(id) {
	try {
		const inversion = await InversionModel.destroy({
			where: { id_inversion: id },
		});

		if (!inversion) return res.sendStatus(400);
		return { message: "Se ha eliminado el registro" };
	} catch (error) {
		return { message: error.message };
	}
}

module.exports = { getAllInversion, getInversion, createInversion, updateInversion, deleteInversion };
