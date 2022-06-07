const path = require('path');
const fs=require("fs");
const dbProductos=path.join(__dirname, "../database/productos.json")
const readJsonFile= path=>{
    const data=fs.readFileSync(path, "utf-8")
    const dataParse=JSON.parse(data)
    return dataParse;
}

const controller = {
    index: (req, res) => {
        const productos = readJsonFile(dbProductos);
        res.render("home", { productos: productos });
    },

    about: (req, res) => {
        res.render(path.join("about"));
    },
    cart: (req, res) => {
        res.render("cart");
    },
    products: (req, res) => {
        res.render("products");
    },
    login: (req, res) => {
        res.render("login");
    },
    register: (req, res) => {
        res.render("register");
    }
}
module.exports = controller;