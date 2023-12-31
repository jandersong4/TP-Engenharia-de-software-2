//BANCO DE DADOS:
//para criar o banco de dados vamos usar o sequelize que nos ajuda a criar um banco de dados relacional
//importar o sequelize

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "sqlite",
  }
);

module.exports = sequelize;
