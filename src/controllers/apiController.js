const path = require('path');
const fs = require('fs');
const { validationResult } = require('express-validator');
const Product = require('../models/Products')
let db = require("../../database/models")

const apiController = {
  products: async (req, res) => {
    res.json({
      count: await Product.list().length,
      countByCategory: {
        cafe: await Product.findByCategory(1),
        accesorios: await Product.findByCategory(2),
        cafeteras: await Product.findByCategory(3),
        buzos: await Product.findByCategory(4)
      },
      procuctos: await Product.list()
    });
  },
  product: async (req, res) => {
    const producto = await Product.findByPk(req.params.id);
    return res.json( producto );
  }
};

module.exports = apiController;
