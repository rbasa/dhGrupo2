const path = require('path');
const fs = require('fs');
const { validationResult } = require('express-validator');
const Product = require('../models/Products')
let db = require("../../database/models")

const productController = {
  list: async (req, res) => {
    const productos = await Product.list()
    res.render('products/allProducts', { productos });
  },
  detail: async (req, res) => {
    const producto = await Product.findByPk(req.params.id);
     return res.render('products/products', { producto });
  },
  productsCreate: async (req, res) => {
    const categorias = await Product.listCategory();
    // return res.send(categorias[1].product_category);
    return res.render('products/create', { categorias });
  },
  productsEdit: async(req, res) => {
    const producto = await Product.findByPk(req.params.id)
    const categorias = await Product.listCategory()
    return res.render('products/edit', { producto: producto, categorias });
  },
  productsNew: async (req, res) => {
    if (validationResult(req).isEmpty()){
      await Product.create(req)
      res.redirect('products');
    } else {
      return res.render('products/create', { errors: errors.mapped(), old: req.body });
    }
  },
  productsPut: async (req, res) => {
    await Product.update(req.params.id, req)
    res.redirect('/products/' + req.params.id)
  },
  productsDelete: async (req,res) => {
    await Product.delete(req.params.id, req);
    res.redirect('/products');
  }
};

module.exports = productController;
