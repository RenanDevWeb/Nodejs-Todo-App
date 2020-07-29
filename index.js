const express = require('express');
const app = express();
const porta = 3000;



app.set("view engine", "ejs");

app.get('/' , (req,res) => {
    res.render('index');
});


app.listen(porta,() => {
    console.log("servidor rodando")
})