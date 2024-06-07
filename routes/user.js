const express = require("express");
const router = express.Router();
const userController =  require("../controller/user");

router.route('/users').post(userController.createUser);

module.exports = router;