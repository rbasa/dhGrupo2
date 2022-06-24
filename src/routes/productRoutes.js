const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get("/",productController.list);
router.get('/create', productController.productsCreate);
router.get('/:id', productController.allProducts);
router.post("/",productController.productsNew);
//router.get('/:id', productController.productsId);//
router.get('/:id/edit', productController.productsEdit);
router.put('/:id', productController.productsPut);
router.delete('/:id', productController.productsDelete);

module.exports = router
