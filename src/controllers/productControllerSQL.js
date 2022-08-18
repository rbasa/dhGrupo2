const path = require('path');
const fs = require('fs');
const { validationResult } = require('express-validator');
let db = require("../../database/models/Product")


const productController = {
    allProducts : function(req,res){
    db.Products.findByPk(req.params.id)
    .then(function(p){
        return res.render('products/allProducts', { productos: p });
    })},
  productsCreate: (req, res) => {
    return res.render('products/create');
  },
  productsEdit: (req, res) => {
    const productos = readJsonFile(dbProductos);
    const id = req.params.id;
    const producto = productos.find(e => e.id == id);
    return res.render('products/edit', { producto: producto });
  },
  productsNew: (req, res) => {
    let errors = validationResult(req);
    if(errors.isEmpty()){
        db.Products.create({
        name: req.body.name,
        category: req.body.category,
        description: req.body.description,
        price: req.body.price,
        image: req.file ? 'images/' + req.file.filename : 'images/foto-vacia',
        }).then(()=> res.redirect('products'));
    }else{
      return res.render('products/create', { errors: errors.mapped(), old: req.body });
    }
  },
  productsPut: (req, res) => {
    Products.update({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    image: req.file ? 'images/' + req.file.filename : false
    },{
    where: { id: req.params.id }
    }).then(()=> res.redirect('/products/' + req.params.id))
  },
  productsDelete: (req,res)=>{
    db.Products.destroy({
    where: { id: req.params.id }
    })
    return res.redirect('/products');
  },
  list: (req,res)=>{
    db.Products.findAll()
    .then(function(p){
        return res.render('products/allProducts', { productos: p });
    })}
};

module.exports = productController;
