const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multer');
const formValidations = require('../middlewares/productFormsValidators');
const { check } = require('express-validator');
const productController = require('../controllers/productController');

router.get('/',productController.list);
router.get('/create', productController.productsCreate);
router.get('/:id', productController.allProducts);
router.post('/', upload.single('imagen-producto'), formValidations, productController.productsNew);
router.get('/:id/edit', productController.productsEdit);
router.put('/:id', upload.single('imagen-producto'), formValidations, productController.productsPut);
router.delete('/:id', productController.productsDelete);

module.exports = router
