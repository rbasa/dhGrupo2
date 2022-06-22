const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/:id', productController.products);
router.get('/create', productController.productsCreate);
router.get('/:id', productController.productsId);
router.post('/new', productController.productsNew);
router.get('/:id/edit', productController.productsEdit);
router.put('/:id', productController.productsPut);
router.delete('/:id', productController.productsDelete);

module.exports = router
