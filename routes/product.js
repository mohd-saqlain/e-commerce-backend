const express = require("express");
const router = express.Router();
const productController =  require("../controller/product");

router.route('/products').get(productController.getAllProduct).post(productController.addProduct);

module.exports = router;