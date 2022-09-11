const { Router } = require("express");
const { getAllInversion, getInversion, createInversion, updateInversion, deleteInversion } = require("./controller");

const router = Router();

router.get("/", getAllInversion);
router.get("/:id", getInversion);
router.post("/", createInversion);
router.put("/:id", updateInversion);
router.delete("/:id", deleteInversion);

module.exports = router;
