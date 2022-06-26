const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multer');

const productController = require('../controllers/productController');

router.get('/',productController.list);
router.get('/create', productController.productsCreate);
router.get('/:id', productController.allProducts);
router.post('/', upload.single('imagen-producto'), productController.productsNew);
//router.get('/:id', productController.productsId);//
router.get('/:id/edit', productController.productsEdit);
router.put('/:id', upload.single('imagen-producto'), productController.productsPut);
router.delete('/:id', productController.productsDelete);

module.exports = router
