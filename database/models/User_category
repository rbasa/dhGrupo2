module.exports = (sequelize, dataTypes) => {
  const User_category = sequelize.define('user_category', {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoincrement: true,
      allowNull: false
    },
    user_category:{
      type: dataTypes.STRING(50),
      allowNull: false
    },
  },
  {
    tableName: "user_category",
    timestamps: false
  });

  return User_category
}