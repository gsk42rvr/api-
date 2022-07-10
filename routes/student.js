const express = require('express');
const { addStudent, getAllStudents, supStudent, modifierStudent } = require('../controller/student');
const router2 = express.Router();

router2.route("/student").post(addStudent);
router2.route("/student").get(getAllStudents);
router2.route("/student/:id").delete(supStudent);
router2.route("/student/:id").put(modifierStudent);

module.exports = router2;