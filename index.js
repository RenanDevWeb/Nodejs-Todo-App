const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const porta = 3000;
const connection = require('./database/database');
const Action = require('./database/actions');


app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());



connection.authenticate()
    .then(() => { console.log("Conectado ao banco de dados")})
    .catch((err) => { console.error(err)})



app.get('/' , (req,res) => {
    Action.findAll().then(actions => {
        res.render('index',{
            actions: actions,
        });
    })
});



app.post('/salvar' , (req,res) => {
    const actions = req.body.action;
    if(actions != ''){
        Action.create({
            action:actions
        }).then(() => {
            res.redirect('/');
        }).catch(err => {
            console.log(err);
        })  
    }else{
        res.render('errorinput')
    }
});

app.get('/voltar',(req,res)=>{
    res.redirect('/')
})



app.post('/excluir', (req,res) =>{
    const id = req.body.id;
    if(!isNaN(id) || id != undefined){
        Action.destroy({
            where: {
                id:id
            }
        }).then(() => res.redirect('/')).catch(err => console.log(err));
    }else{
        res.redirect('/')
    }

});



   





app.listen(porta,() => {
    console.log("servidor rodando")
})