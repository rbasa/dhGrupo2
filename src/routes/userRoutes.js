const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const registerValidations = require('../middlewares/registerMiddleware');

router.get('/login', userController.login);
router.post('/login', userController.loginProcess);
router.get('/register', userController.register);
router.post('/register', registerValidations, userController.processRegister);

module.exports = router