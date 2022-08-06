module.exports = (sequelize, dataTypes) => {
  const Product_category = sequelize.define('product_category', {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoincrement: true
    },
    product_category:{
      type: dataTypes.STRING(50),
      allowNull: false
    },
  },
  {
    tableName: "product_category",
    timestamps: false
  });

  return Product_category
}