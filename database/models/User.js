module.exports = (sequelize, dataTypes) => {
  const User = sequelize.define('Users', {
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
    email:{
      type: dataTypes.STRING(60),
      allowNull: false
    },
    password:{
      type: dataTypes.STRING(60),
      allowNull: false
    },
    user_category_id:{
      type: dataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    tableName: "users",
    timestamps: false
  });

  return User
}