const Sequelize = require('sequelize');

const conn = new Sequelize("fpf_warriors","root","",{
    host: "localhost",
    dialect: "mysql"
});

module.exports = conn;