const express = require('express')
const { addClass, getAllClasses,supclass,getTotalStudent} = require('../controller/classe')
const router4 = express.Router();

router4.route("/classe").post(addClass);
router4.route("/classe").get(getAllClasses)
router4.route('/classe/:id').delete(supclass)
router4.route('/classe/:name').get(getTotalStudent)

module.exports = router4