const Sequelize = require('sequelize');
const conn = require('../config/database');

const User = conn.define("user", {
    name: {
        type: Sequelize.STRING(15),
        allowNull: false,
        primaryKey: true
    },
    score: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    },
    favoritos: {
        type: Sequelize.STRING,
        allowNull: true
    },
    ultimos: {
        type: Sequelize.STRING,
        allowNull: true
    }
});

// User.sync({force: true}).then(() => {console.log("Tabela de usuários criada")});

module.exports = User