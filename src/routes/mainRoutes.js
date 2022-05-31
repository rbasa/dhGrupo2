const express = require('express');
const router = express.Router();
const controller = require('../controllers/mainController');

router.get('/', controller.index);
router.get('/cart', controller.cart);
router.get('/login', controller.login);
router.get('/register', controller.register);
router.get('/products', controller.products);

module.exports = router

