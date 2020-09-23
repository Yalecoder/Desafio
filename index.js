const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const conexao = require('./database/database');
const Membros = require("./controller/membros");

//Motor
app.set('view engine', 'ejs');
app.use(express.static('public'));

//Body-parser
app.use(bodyParser.urlencoded({extends: false}))
app.use(bodyParser.json())

//Controller

const membrosController = require("./controller/membrosController");
app.use("/",membrosController);

//Banco de Dados

    conexao.authenticate().then(() =>{
        console.log("Banco Conectado");
    }).catch((err) =>{
        console.log(err);
    })

app.get("/", (req,res) =>{
    Membros.findAll({
        order:[[
            "id","DESC"
        ]]
    }).then(membros =>{
        res.render("index",{membros: membros})
    })
})

app.listen(8070, () =>{
    console.log("Rodando");
})