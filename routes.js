const { mongo } = require("mongoose");

const router = require("express").Router();
const caseController = require("./controllers/caseController");

router.get("/", caseController.getAllCases);
router.get("/country/:countryId", caseController.getSingleCase);

module.exports = router;
