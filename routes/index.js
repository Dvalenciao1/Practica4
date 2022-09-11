var express = require("express");
const inversion = require("../component/inversion/routes");

var router = express.Router();

router.use("/", inversion);

module.exports = router;
