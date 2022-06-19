const path = require("path");
const fs = require("fs");
const dbProductos = path.join(__dirname, "../database/productos.json");

const controller = {
  index: (req, res) => {
    const productos = readJsonFile(dbProductos);
    res.render("home", { productos: productos });
  },
  about: (req, res) => {
    res.render(path.join("about"));
  },
  cart: (req, res) => {
    res.render("products/cart");
  },
  login: (req, res) => {
    res.render("users/login");
  },
  register: (req, res) => {
    res.render("users/register");
  },
  create: (req, res) => {
    res.render("admin/create");
  },
};
module.exports = controller;
