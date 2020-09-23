const Sequelize = require("sequelize");
const conexao = require("../database/database");

const Membros = conexao.define('membros',{
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },

    numero:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
});


Membros.sync();

module.exports = Membros;