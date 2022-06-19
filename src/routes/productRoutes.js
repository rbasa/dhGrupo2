const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.products);
router.get('/products/create', productController.productsCreate);
router.get('/products/:id', productController.productsId);
router.post('/products', productController.productsNew);
router.get('/products/:id/edit', productController.productsEdit);
router.put('/products/:id', productController.productsPut);
router.delete('/products/:id', productController.productsDelete);

module.exports = router
