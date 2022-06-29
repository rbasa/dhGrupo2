const { check } = require('express-validator');
const path = require('path');

const formValidations = [
    check('name')
    .notEmpty().withMessage('debes comlpetar el campo nombre'),
    check('category')
    .notEmpty().withMessage('debes comlpetar el campo categoria'),
    check('description').notEmpty().withMessage('debes comlpetar el campo descripcion'),
    check('price')
    .notEmpty().withMessage('debes comlpetar el campo precio').bail()
    .isInt().withMessage('el campo debe ser un número')
    // check('imagenProducto').custom((value, { req } ) => {
    //     if (!file) {
    //         throw new Error('Tenés que subir una imagen');
    //     }else{
    //         const extensiones = ['.jpg', '.jpeg', '.png', '.gif'];
    //         let fileExtension = path.extname(file.originalname);
    //         if (!extensiones.includes(fileExtension)) {
    //             throw new Error(`Solo se permiten los archivos con extensión ${extensiones.join(', ')}`);             
    //         }
    //     }
    // })
];

module.exports = formValidations;