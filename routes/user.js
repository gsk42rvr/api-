const express = require('express');
const auth = require("../middleware/auth")
const{ admin } = require("../middleware/roles")
const { addUser, getAllUsers, getUser, modifierUser, supUser } = require('../controller/user');
const router = express.Router();

router.route("/utilisateurs").post(auth,addUser);
router.route("/utilisateurs").get(getAllUsers);
router.route("/utilisateurs/:id").get(getUser);
router.route("/utilisateurs/:id").put(modifierUser);
router.route("/utilisateurs/:id").delete(supUser);
module.exports = router;