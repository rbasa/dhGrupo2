const path = require('path');
const fs = require('fs');
const { validationResult } = require('express-validator');
let db = require("../../database/models")
const Product = require('../models/Products')
const User = require("../models/Users")

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
      productos: await Product.list()
    });
  },
  product: async (req, res) => {
    const producto = await Product.findByPk(req.params.id);
    return res.json( producto );
  },
  list: async (req,res) => {
    const usersList = await User.list()

    const usersResponse = {
      count: usersList.length,
      users: usersList
    }
    return res.send(usersResponse)
  },
  userDetail: async(req,res) => {
    const selectedUser = await User.findByPk(req.params.id);
    return res.send(selectedUser);
  }
};

module.exports = apiController;
