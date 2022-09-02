const express = require('express');
const { body } = require('express-validator');

const registerValidations = [
  body('name').notEmpty().withMessage('El campo Usuario es obligatorio'),
  body('password').notEmpty().withMessage('Debes ingresar una contraseña'),
  body('email').isEmail().withMessage('Debes ingresar un Email válido'),
  body('imagenUsuario').custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = ['.jpg', '.png', '.gif'];
		
		if (!file) {
			throw new Error('Tienes que subir una imagen');
		} else {
			let fileExtension = path.extname(file.originalname);
			if (!acceptedExtensions.includes(fileExtension)) {
				throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
			}
		}

		return true;
	})
];
module.exports = registerValidations;
