const express = require('express');
const router = express.Router();
const controller = require('../controllers/apiController');

// router.get('/users', controller.index);
router.get('/products', controller.products);
router.get('/products/:id', controller.product);
router.get('/users', controller.list);
router.get('/users/:id', controller.userDetail);

module.exports = router

