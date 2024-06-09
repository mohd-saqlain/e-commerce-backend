const express = require("express");
const router = express.Router();
const userController =  require("../controller/user");

router.route('/users').post(userController.createUser);
router.post('/create-admin',userController.createAdmin);
router.post('/admin-login',userController.adminLogin)

module.exports = router;