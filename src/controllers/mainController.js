const path = require("path");
const fs = require("fs");
let dbProductos = path.join(__dirname, "../database/productos.json");
let productosEnCarrito = path.join(__dirname, "../database/carrito.json");
const readJsonFile = (path) => {
  const data = fs.readFileSync(path, "utf-8");
  const dataParse = JSON.parse(data);
  return dataParse;
};

const controller = {
  index: (req, res) => {
    const productos = readJsonFile(dbProductos);
    res.render("home", { productos: productos });
  },
  about: (req, res) => {
    res.render(path.join("about"));
  },
  cart: (req, res) => {
    const productosAgregados = readJsonFile(productosEnCarrito);
    res.render("products/cart", { productos: productosAgregados });
  },
  login: (req, res) => {
    res.render("users/login");
  },
  register: (req, res) => {
    res.render("users/register");
  },
  create: (req, res) => {
    res.render("/create");
  },
};
module.exports = controller;
