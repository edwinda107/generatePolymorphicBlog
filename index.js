const express = require('express') ; 
const controller = require('./controller.js') ; 
const app = express() ; 
const PORT = 80 ; 


app.set('views','./views') ; 
app.set('view engine','pug') ; 
app.use(express.static('public')) ; 
app.get('/',function(req,res){
    res.render('login.pug') ; 
});

app.get('/dashboard',function(req,res){
    res.render('dashboard.pug') ; 
});
app.get('/register',function(req,res){
    res.render('register.pug') ; 
})
app.get('/common',function(req,res){
    res.render('layouts/common.pug') ; 
});
app.listen(PORT,function(){
    console.log(`App is listening on port ${PORT} `) ; 
});