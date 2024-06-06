const express = require("express");
const router = express.Router();
const orderController =  require("../controller/order");

router.route('/orders').post(orderController.createOrder).get(orderController.getAllOrders);

module.exports = router;