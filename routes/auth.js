const express = require('express');
const auth = require("../middleware/auth")
const { getAuthToken, checkToken} = require('../controller/auth');
const authRouter = express.Router();
authRouter.route("/getauthtoken").post(getAuthToken)
authRouter.route("/checkToken").get(auth,checkToken)

module.exports = {authRouter}