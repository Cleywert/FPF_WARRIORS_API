const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const connection = require('./config/database');

// conectando ao banco
connection.authenticate().then(() => {
    console.log("Conectado ao banco");
}).catch(err => {
    console.log(err);
});

// habilitando o CORS
app.use(cors());

// setando o body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// importando controllers
// os models de cada controller é importado dentro do mesmo e será executado
const ControllerUser = require("./controllers/controllerUser");
app.use("/", ControllerUser)

// Setando porta da aplicação
app.listen(8001, () => {
    console.log("Servidor rodando");
})