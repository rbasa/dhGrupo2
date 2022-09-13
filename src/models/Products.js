const fs = require('fs');
let db = require("../../database/models");

const Product = {
  list: async() => {
    return await db.Products.findAll();
  },
  findByCategory: async (value)=>{
    productCategories = await db.Products.findAll({
      where: {
        product_category_id: value
      }
    });
    return productCategories.length
},
  findByPk: async (id) => {
    return await db.Products.findByPk(id);
  },
  create: async (req) =>{
    const image = req.file ? 'images/' + req.file.filename : 'images/foto-vacia'
    await db.Products.create({
      name : req.body.name,
      product_category_id: req.body.category,
      description: req.body.description,
      price: req.body.price,
      image: image
    });
  },
  update: async (id, req) => {
    await db.Products.update(
      {name: req.body.name,
      description: req.body.description,
      price: req.body.price},
      {where: { id: req.params.id }
    });
  },
    delete: async (id) => {
      await db.Products.destroy({
        where: { id: id }
      });
      return true;
    }
}

module.exports = Product;
