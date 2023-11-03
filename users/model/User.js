const sequelize = require("../../database/");
const { DataTypes } = require("sequelize");

//tabela banco de dados
const User = sequelize.define("Users", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM,
    values: ["admin", "user"],
    allowNull: false,
  },
});

User.sync({
  alter: false, // se ja tiver uma tabela ela deverá ser alterada e nao criar uma nova
  force: false, // nao apagará a tabela existente pra criar uma nova
})
  .then(() => console.log("A tabela Users foi (re)criada"))
  .catch((error) => console.log(error));

module.exports = User;
