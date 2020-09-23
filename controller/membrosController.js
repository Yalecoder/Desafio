const express = require('express');
const Membros = require("./membros");
const router = express.Router();

router.get('/ini', (req,res) =>{
    res.send("hello");
})

router.post("/cadastrar",(req,res) =>{
    var nome = req.body.nome;
    var numero = req.body.numero;

    Membros.create({
        nome: nome,
        numero: numero
    }).then(() =>{
        res.redirect("/");
    }).catch((err) =>{
        res.redirect("/");
    })
})


module.exports = router;