const express = require('express');
const router = express.Router();

const productsController = require('../../controllers/products.controller')
// localhost:8000/api/products

router.get('/', productsController.getProducts);

router.get('/:id', productsController.getProduct);

// add new product
router.post('/', productsController.createProduct);

router.put('/:id',productsController.updateProduct);

router.delete('/:id', productsController.deleteProduct);

module.exports = router;
