var express = require('express') ; 
var app = express() ; 
var userRoute = require('./routes/user.route') ; 

const PORT = 80 ; 
    app.use(express.static('public')) ; 
    app.set('view engine','pug') ; 
    app.set('views','./views') ; 
    app.use('/user',userRoute) ; 


/*app.get('/',function(req,res){
    res.render('index.pug') ; 
});*/
app.get('/dashboard',function(req,res){
    res.render('dashboard.pug') ; 
});
/*app.get('/register',function(req,res){
    res.render('register.pug') ;
})*/
/*app.get('/common',function(req,res){
    res.render('layouts/common.pug') ; 
});*/
app.listen(PORT,function(){
    console.log(`App is listening on port ${PORT} `) ; 
});