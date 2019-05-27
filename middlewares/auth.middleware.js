var db = require('../db') ; 
module.exports.reqAuth = function(req,res,next){
    if (!req.cookies) {
        res.redirect('/user/login') ;
        return ;  
    }
    let cmp = db.get('users').find({id : req.cookies.id}).value() ; 
    if (!cmp){
        res.redirect('/user/login') ; 
        return ; 
    }
    next() ; 
}