module.exports = (sequelize, dataTypes) => {
  const Product = sequelize.define('Products', {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoincrement: true,
      allowNull: false
    },
    name:{
      type: dataTypes.STRING(50),
      allowNull: false
    },
    description:{
      type: dataTypes.STRING,
      allowNull: false
    },
    product_category_id:{
      type: dataTypes.INTEGER,
      allowNull: false
    },
    price:{
      type: dataTypes.DECIMAL(10,2),
      allowNull: false
    }
  },
  {
    tableName: "products",
    timestamps: false
  });

  return Product
}