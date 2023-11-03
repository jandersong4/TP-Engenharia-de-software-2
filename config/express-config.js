require("dotenv").config();
const express = require("express"); //importando express, o express é uma biblioteca para criarmos nosso servidor

const app = express(); // apos ter o express importado agora podemos usa-lo, com isso vamos atribuir o express e suas propriedades a constante app.
//sempre que quiser-mos usar o expressa basta chamar o app

const cors = require("cors");
app.use(cors());

//vamos usar middlewares ,  middlewares são coisas que acontecem antes da chamada da rota
//O que estamos fazendo abaixo são boddy parsers, funções que nos ajudam a interpretar o que esta sendo passado
app.use(
  express.urlencoded({
    // aqui definimos que todas as rotas usarão esse padrao
    extended: true,
  })
);

app.use(express.json());

const usersRouter = require("../users/controller/user-controller");
app.use("/users", usersRouter);

module.exports = app; //aqui exportamos o app para o resto do sistema
