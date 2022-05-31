const path = require('path');

const controller = {
    index: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/home.html'));
    },
    about: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/about.html'));
    },
    cart: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/cart.html'));
    },
    products: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/products.html'));
    },
    login: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/login.html'));
    },
    register: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/register.html'));
    }
}
module.exports = controller;