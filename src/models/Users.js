let db = require("../../database/models");

const User = {
  list: async() => {
    return await db.User.findAll();
  },
  findByPk: async (id) => {
    return await db.User.findByPk(id);
  },
  findByEmail: async (mail) => {
    return await db.User.findOne({
    where: { email: mail }
  })},
  create: async function(userData){
    await db.User.create({
    name: userData.name,
    email: userData.email,
    password: userData.password,
    user_category_id: userData.category,
    image: userData.imagen
    });
  }
}

module.exports = User;
