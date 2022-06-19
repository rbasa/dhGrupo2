const express = require('express');
const router = express.Router();
const controller = require('../controllers/mainController');
// const productController = require('../controllers/productController');

router.get('/', controller.index);
router.get('/cart', controller.cart);
router.get('/login', controller.login);
router.get('/register', controller.register);
// products
router.get('/products', controller.products);
router.get('/products/create', controller.productCreate);
router.get('/products/:id', controller.productsId);
router.post('/products', controller.productsNew);
router.get('/products/:id/edit', controller.productsEdit);
router.put('/products/:id', controller.productsPut);
router.delete('/products/:id', controller.productsDelete);

router.get('/create', controller.create)

module.exports = router

