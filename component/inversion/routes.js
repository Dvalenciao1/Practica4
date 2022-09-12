const { Router } = require("express");
const { getAllInversion, getInversion, createInversion, updateInversion, deleteInversion } = require("./controller");
const response = require("../../middleware/respuesta");

const router = Router();

router.get("/", (req, res) => {
	getAllInversion()
		.then((data) => {
			response.success(req, res, data, 200);
		})
		.catch((error) => {
			console.log(error);
			response.warning(req, res, error, 500);
		});
});

router.get("/:id", (req, res) => {
	const id = req.params.id;
	getInversion(id)
		.then((data) => {
			response.success(req, res, data, 200);
		})
		.catch((error) => {
			console.log(error);
			response.warning(req, res, error, 500);
		});
});

router.post("/", (req, res) => {
	const { fecha_inversion, valor_inicial, num_años, valor_final } = req.body;

	const inversonBody = {
		fecha_inversion,
		valor_inicial,
		num_años,
		valor_final,
	};

	createInversion(inversonBody)
		.then((data) => {
			response.success(req, res, data, 200);
		})
		.catch((error) => {
			response.warning(req, res, error, 500);
		});
});

router.put("/:id", (req, res) => {
	const id = req.params.id;

	const { fecha_inversion, valor_inicial, num_años, valor_final } = req.body;

	let inversonBody = {
		fecha_inversion,
		valor_inicial,
		num_años,
		valor_final,
	};
	updateInversion(id, inversonBody)
		.then((data) => {
			response.success(req, res, data, 200);
		})
		.catch((error) => {
			response.warning(req, res, error, 500);
		});
});

router.delete("/:id", (req, res) => {
	const id = req.params.id;
	deleteInversion(id)
		.then((data) => {
			response.success(req, res, data, 200);
		})
		.catch((error) => {
			response.warning(req, res, error, 500);
		});
});

module.exports = router;
