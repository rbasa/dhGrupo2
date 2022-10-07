// aca vamos a verificar que el archivo que se 
// intenta subir es una imagen
const path = require('path');

const filetype = (req, res, next) => {
    if(req.file){
      // Allowed ext
      const filetypes = /jpeg|jpg|png|gif/;
      // Check ext
      const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
      // Check mime
      const mimetype = filetypes.test(file.mimetype);
      if(mimetype && extname){
        return cb(null, true);
      } else {
        cb('Error: Images Only!');
      }
    }
    next();
};

module.exports = filetype;