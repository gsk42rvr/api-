const express = require('express');
const { createDepartement, updateDepartement } = require('../controller/departement');
const router6 = express.Router();

router6.route("/createDepartement").post(createDepartement)
router6.route("/createDepartement/:id").put(updateDepartement)

module.exports = router6