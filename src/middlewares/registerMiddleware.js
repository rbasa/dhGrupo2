const express = require('express');
const { body } = require('express-validator');

const registerValidations = [
  body('name').notEmpty().withMessage('El campo Usuario es obligatorio'),
  body('password').notEmpty().withMessage('Debes ingresar una contraseña'),
  body('email').isEmail().withMessage('Debes ingresar un Email válido')
];
module.exports = registerValidations;
