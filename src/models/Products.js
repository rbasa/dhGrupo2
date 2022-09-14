const fs = require('fs');
let db = require("../../database/models");

const Product = {
  list: async() => {
    return await db.Product.findAll({
      include: [{association:'category'}]
    });
  },
  listCategory: async () => {
    return await db.product_category.findAll()
  },
  findByCategory: async (value)=>{
    productCategories = await db.Product.findAll({
      include: [{association:'category'}],
      where: {
        product_category_id: value
      }
    });
    return productCategories.length
  },
  findByPk: async (id) => {
    return await db.Product.findByPk(id,{
      include: [{association:'category'}]
    });
  },
  create: async (req) =>{
    const image = req.file ? 'images/' + req.file.filename : 'images/foto-vacia'
    await db.Product.create({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      product_category_id: req.body.categorias,
      image: image,
      include: [{association:'category'}]
    });
  },
  update: async (id, req) => {
    await db.Product.update({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price
    },{
      where: { id: req.params.id },
      include: [{association:'category'}]
    });
  },
    delete: async (id) => {
      await db.Product.destroy({
        where: { id: id }
      });
      return true;
    }
}

module.exports = Product;
