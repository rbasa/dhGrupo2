const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const registerValidations = require('../middlewares/registerMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const userMiddleware = require('../middlewares/userMiddleware');
const upload = require('../middlewares/multerUsers');

router.get('/login', guestMiddleware, userController.login);
router.post('/login', userController.loginProcess);
router.get('/register', guestMiddleware, userController.register);
router.post('/register', upload.single("imagenUsuario"), registerValidations, userController.processRegister);
router.get('/profile', userMiddleware, userController.profile);
router.get('/logout', userController.logout);

module.exports = router
