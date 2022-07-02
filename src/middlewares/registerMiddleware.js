const { check } = require('express-validator');

// name
// email
// password
// passwordConfirmation

const registerValidations = [
    check('name')
    .notEmpty().withMessage('El campo Usuario es obligatorio'),
    check('password')
    .notEmpty().withMessage('Debes ingresar una contrasena'),
    check('email')
    .notEmpty().withMessage('El campo Email es obligatorio').bail()
    .isEmail().withMessage('Debes ingresar un Email válido')
    // .custom(async (passwordConfirmation, {req}) => {
    //     const password = req.body.password
   
    //     // If password and confirm password not same
    //     // don't allow to sign up and throw error
    //     if(password !== passwordConfirmation){
    //       throw new Error('Passwords must be same')
    //     }
    //   }),
];
module.exports = registerValidations;