const { check } = require('express-validator');

const formValidations = [
    check('name')
    .notEmpty().withMessage('debes comlpetar el campo nombre'),
    check('category')
    .notEmpty().withMessage('debes comlpetar el campo categoria'),
    check('description').notEmpty().withMessage('debes comlpetar el campo descripcion'),
    check('price')
    .notEmpty()
    .withMessage('debes comlpetar el campo precio')
    .isInt().withMessage('el campo debe ser un número')
];

module.exports = formValidations;