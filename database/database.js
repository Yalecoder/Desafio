const Sequelize = require("sequelize");

const conexao = new Sequelize('react','root','kamuflado132',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = conexao;