const path = require('path');
const fs = require('fs');
const { validationResult } = require('express-validator');
let db = require("../../database/models/Product")


const productController = {
  detail : (req, res)=>{
    db.Product.findByPk(req.params.id)
      .then(function(p){
        res.render('products/allProducts', { productos: p })
      })
  },
  productsCreate: (req, res) => {
    return res.render('products/create');
  },
  productsEdit: (req, res) => {
    const producto = db.Product.findByPk(req.params.id)
    .then(()=>{
      return res.render('products/edit', { producto: producto });
    })
  },
  productsNew: (req, res) => {
    let errors = validationResult(req);
    if(errors.isEmpty()){
        db.Product.create({
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
    db.Product.update({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    image: req.file ? 'images/' + req.file.filename : false
    },{
    where: { id: req.params.id }
    }).then(()=> res.redirect('/products/' + req.params.id))
  },
  productsDelete: (req,res)=>{
    db.Product.destroy({
      where: { id: req.params.id }
    }).then(
      ()=>{
        res.redirect('/products');
      }

    )
  },
  list: (req,res)=>{
    db.Products.findAll()
    .then(function(p){
        return res.render('products/allProducts', { productos: p });
    })}
};

module.exports = productController;
