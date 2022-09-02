// import express
const express = require("express");
const ProductController = require('../Controller/Product')

// init express router
const router = express.Router();

// Get All Product
router.get('/products', ProductController.showProducts);

// Get Single Product
router.get('/products/:id', ProductController.showProductById);

// Create New Product
router.post('/products', ProductController.createProduct);

// Update Product
router.put('/products/:id', ProductController.updateProduct);

// Delete Product
router.delete('/products/:id', ProductController.deleteProduct);

// export default router
module.exports = router;