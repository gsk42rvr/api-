const express = require('express');
const { addProf, getAllProfs, supProf } = require('../controller/prof');
const router3 = express.Router();

router3.route("/prof").post(addProf);
router3.route("/prof").get(getAllProfs);
router3.route("/prof/:id").delete(supProf)

module.exports = router3;