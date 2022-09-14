module.exports = (sequelize, dataTypes) => {
  let alias = 'product_category';
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoincrement: true
    },
    product_category:{
      type: dataTypes.STRING(50),
      allowNull: false
    }
  }
  let config = {
    tableName: 'product_category',
    timestamps: false
  }
  const Product_category = sequelize.define(alias, cols, config);
  Product_category.associate = function(modelName){
    Product_category.hasMany(modelName.Product, {
      as: 'productos',
      foreignKey: 'product_category_id'
    })
  }
  return Product_category
}