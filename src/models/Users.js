const fs = require('fs');
let db = require("../../database/models");

const User = {
  list: async() => {
    return await db.User.findAll();
  },
  //listCategory: async () => {
   // return await db.product_category.findAll()//
 // },//
//   findByCategory: async (value)=>{
//     productCategories = await db.Product.findAll({
//       include: [{association:'category'}],
//       where: {
//         product_category_id: value
//       }
//     });
//     return productCategories.length
//   },
  findByPk: async (id) => {
    return await db.User.findByPk(id);
  },
  findByEmail: async(req) => {
    return await db.User.findAll({
    where: {email : req.body.email}
  })
  },
  create: async function(userData){
    await db.Product.create({
    name: userData.name,
    email: userData.email,
    password: userData.password,
    //user_category_id: userData.category,//
    // product_category_id: req.body.categorias,      image: image,
    // include: [{association:'category'}]
    });
    // return newUser;
  },
//   create: async (req) =>{
//     const image = req.file ? 'images/' + req.file.filename : 'images/foto-vacia'
//     await db.Product.create({
//       name: req.body.name,
//       description: req.body.description,
//       price: req.body.price,
//       product_category_id: req.body.categorias,
//       image: image,
//       include: [{association:'category'}]
//     });
//   },
//   update: async (id, req) => {
//     await db.Product.update({
//       name: req.body.name,
//       description: req.body.description,
//       price: req.body.price
//     },{
//       where: { id: req.params.id },
//       include: [{association:'category'}]
//     });
//   },
    // delete: async (id) => {
    //   await db.Product.destroy({
    //     where: { id: id }
    //   });
    //   return true;
    // }
}

module.exports = User;
