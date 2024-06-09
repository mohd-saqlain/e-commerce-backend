const express = require("express");
const router = express.Router();
const orderController =  require("../controller/order");
const {verifyToken} = require("../controller/auth");

router.route('/orders').post(orderController.createOrder).get(verifyToken,orderController.getAllOrders);

module.exports = router;