const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multer');
const formValidations = require('../middlewares/productFormsValidators');
const productController = require('../controllers/productControllerSQL');

router.get('/',productController.list);
router.get('/create', productController.productsCreate);
router.get('/:id', productController.detail);
router.post('/', upload.single('imagen-producto'), formValidations, productController.productsNew);
router.get('/:id/edit', productController.productsEdit);
router.put('/:id', upload.single('imagen-producto'), formValidations, productController.productsPut);
router.delete('/:id', productController.productsDelete);

module.exports = router
