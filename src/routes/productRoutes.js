const express = require('express');
const router = express.Router();
const multer = require("multer");
const path = require('path')
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname,"../public/images"))
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
  }
})

const upload = multer({ storage: storage });
module.exports = upload;

const productController = require('../controllers/productController');

router.get("/",productController.list);
router.get('/create', productController.productsCreate);
router.get('/:id', productController.allProducts);
router.post("/", upload.single("imagen-producto"), productController.productsNew);
//router.get('/:id', productController.productsId);//
router.get('/:id/edit', productController.productsEdit);
router.put('/:id', upload.single("imagen-producto"), productController.productsPut);
router.delete('/:id', productController.productsDelete);

module.exports = router
