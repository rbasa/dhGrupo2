module.exports = function(sequelize, dataTypes){
  let alias = "Products"
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      type: dataTypes.STRING(50),
      allowNull: false
    },
    description: {
      type: dataTypes.STRING,
      allowNull: true
    },
    price: {
      type: dataTypes.DECIMAL(10,2),
      allowNull: true
    },
    product_category_id: {
      type: dataTypes.INTEGER,
      allowNull: true
    },
    image: {
      type: dataTypes.STRING,
      allowNull: false
    }    
  };
  let config = {
    tableName: "products",
    timestamps: false
  };
  const Product = sequelize.define(alias, cols, config);
  // Product.associate = function(models){
  //   Product.belongsTo(models.Product_category, {
  //     as: "category",
  //     foreginKey: product_category_id
  //   })
  // }
  return Product
}