const express = require("express");
const router = express.Router();
const User = require("../models/modelUser");

// CADASTRAR UM USUÁRIO
router.post("/user", (req, res) => {
    const { name, senha } = req.body;

    User.create({
        name,
        senha
    }).then(() => {
        res.status(200)
        res.json({ message: "Usuário Cadastrado!" })
    }).catch(() => {
        res.status(400);
        res.json({ message: "Erro ao cadastrar" })
    })
});

// BUSCA UM USUÁRIO POR NOME
router.get("/user/:name", (req, res) => {
    const { name } = req.params;

    User.findOne({
        where: { name }
    }).then(user => {
        res.status(200);
        res.json(user);
    })
});

// LOGIN DO USUÁRIO
router.get("/user/:name/:senha", (req, res) => {
    const { name, senha } = req.params;

    User.findOne({
        where: { name }
    }).then(user => {
        if (user.senha == senha) {
            res.status(200);
            res.json(user);
        }else{
            res.status(200);
            res.send({message: "Senha incorreta"})
        }
    }).catch(() => {
        res.status(200);
        res.send({message: "User name não encontrado"})
    })
})

module.exports = router;