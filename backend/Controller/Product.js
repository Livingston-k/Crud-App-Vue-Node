const Product = require('../Model/productModel')
    // Get All Products
const showProducts = (req, res) => {
    Product.getProducts((err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

// Get Single Product 
const showProductById = (req, res) => {
    Product.getProductById(req.params.id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

// Create New Product
const createProduct = (req, res) => {
    const data = req.body;
    Product.insertProduct(data, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

// Update Product
const updateProduct = (req, res) => {
    const data = req.body;
    const id = req.params.id;
    Product.updateProductById(data, id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

// Delete Product
const deleteProduct = (req, res) => {
    const id = req.params.id;
    Product.deleteProductById(id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

module.exports = {
    showProducts,
    showProductById,
    createProduct,
    updateProduct,
    deleteProduct
}