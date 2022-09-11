const InversionModel = require("./model");

async function getAllInversion(req, res) {
	try {
		const inversion = await InversionModel.findAll();
		if (!inversion) return res.sendStatus(400);
		return res.json(inversion);
	} catch (error) {
		return res.send({ message: error.message });
	}
}

async function getInversion(req, res) {
	try {
		const id = req.params.id;
		const inversion = await InversionModel.findAll({
			where: { id_inversion: id },
		});

		if (!inversion) return res.sendStatus(400);
		return res.json(inversion);
	} catch (error) {
		return res.send({ message: error.message });
	}
}

async function createInversion(req, res) {
	try {
		const { fecha_inversion, valor_inicial, num_años, valor_final } = req.body;

		const inversonBody = {
			fecha_inversion,
			valor_inicial,
			num_años,
			valor_final,
		};
		const inversion = await InversionModel.create(inversonBody);

		if (!inversion) return res.sendStatus(400);
		return res.json(inversion);
	} catch (error) {
		return res.send({ message: error });
	}
}

async function updateInversion(req, res) {
	try {
		const id = req.params.id;

		const { fecha_inversion, valor_inicial, num_años, valor_final } = req.body;

		let inversonBody = {
			fecha_inversion,
			valor_inicial,
			num_años,
			valor_final,
		};

		const inversion = await InversionModel.update(inversonBody, {
			returning: true,
			plain: true,
			where: { id_inversion: id },
		});

		if (!inversion) return res.sendStatus(400);
		return res.json(inversion);
	} catch (error) {
		return res.send({ message: error.message });
	}
}

async function deleteInversion(req, res) {
	try {
		const id = req.params.id;
		const inversion = await InversionModel.destroy({
			where: { id_inversion: id },
		});

		if (!inversion) return res.sendStatus(400);
		return res.send("inversion eliminada");
	} catch (error) {
		return res.send({ message: error.message });
	}
}

module.exports = { getAllInversion, getInversion, createInversion, updateInversion, deleteInversion };
