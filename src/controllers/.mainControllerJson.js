const path = require('path');
const fs = require('fs');
const dbProductos = path.join(__dirname, '../database/productos.json');
const dbCart = path.join(__dirname, '../database/cart.json');

const readJsonFile = (path) => {
  const data = fs.readFileSync(path, 'utf-8');
  const dataParse = JSON.parse(data);
  return dataParse;
};

const controller = {
  index: (req, res) => {
    const productos = readJsonFile(dbProductos);
    return res.render('home', { productos: productos });
  },
  about: (req, res) => {
    return res.render(path.join('about'));
  },
  cart: (req, res) => {
    const seleccionados = readJsonFile(dbCart);
    let total = 0;
    seleccionados.forEach(e => {
      total = total + e.precio*e.cantidad;
    })
    return res.render('products/cart',{ seleccionados: seleccionados, total: total });
  }
};
module.exports = controller;
