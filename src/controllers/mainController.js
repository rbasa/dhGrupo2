const path = require('path');

const controller = {
    index: (req, res) => {
        res.render("home");
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