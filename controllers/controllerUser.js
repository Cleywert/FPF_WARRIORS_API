const express = require("express");
const router = express.Router();
const User = require("../models/modelUser");

// CADASTRAR UM USUÁRIO
router.post("/user", (req, res) => {
    const {name, senha} = req.body;

    User.create({
        name,
        senha
    }).then(() => {
        res.status(200)
    })
});

// BUSCA UM USUÁRIO POR NOME
router.get("/user/:name", (req, res) => {
    const {name} = req.params;

    User.findOne({
        where: {name}
    }).then(user => {
        res.status(200);
        res.json(user);
    })
})

module.exports = router;