var express = require('express') ;
var bodyParser = require('body-parser') ; 
var userRoute = require('./routes/user.route') ; 
var app = express() ; 


const PORT = 80 ; 
    

    app.use(express.static('public')) ; 
    app.set('view engine','pug') ; 
    app.set('views','./views') ;  
    app.use(bodyParser.json()) ;
    app.use(bodyParser.urlencoded({extended : true})) ;

    app.use('/user',userRoute) ;

/*app.get('/',function(req,res){
    res.render('index.pug') ; 
});*/
/*app.get('/dashboard',function(req,res){
    res.render('dashboard.pug') ; 
});*/
app.listen(PORT,function(){
    console.log(`App is listening on port ${PORT} `) ; 
});