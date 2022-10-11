module.exports = (sequelize, dataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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
    },
    image:{
      type: dataTypes.STRING,
      allowNull: false
    }
  },
  {
    tableName: "user",
    timestamps: false
  });
  return User
}
