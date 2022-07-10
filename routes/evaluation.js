const express = require("express")
const router = require("./user")
const {addEval, getAllEvals, getPassedEvals, getNextdEvals, getEval} = require('../controller/evaluation')
const router5 = express.Router()

router5.route("/evaluation").post(addEval)
router5.route("/evaluation").get(getAllEvals)
router5.route("/passedevaluation").get(getPassedEvals)
router5.route("/nextevaluation").get(getNextdEvals)
router5.route("/evaluation/:id").get(getEval)


module.exports = router5