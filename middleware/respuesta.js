exports.success = function (req, res, dato, estado) {
	res.status(estado || 200).send({
		error: "",
		body: dato,
	});
};

exports.warning = function (req, res, error, estado) {
	console.error("[error] - " + error);
	res.status(estado || 500).send({
		error: error,
		body: "",
	});
};
