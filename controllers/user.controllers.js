var db = require('../db') ; 
var md5 = require('md5') ; 
module.exports.login = function(req,res){
    res.render('login.pug') ; 
}
module.exports.register = function(req,res){
    res.render('register.pug') ; 
}
module.exports.dashboard = function(req,res){
    res.render('dashboard.pug') ; 
}
module.exports.logout  =function(req,res){
    res.clearCookie('id') ; 
    res.redirect('/user/login') ; 
}
module.exports.postRegister = function(req,res){
    let id = req.body.id ; 
    let pass = md5(req.body.pass) ;
    let projects = [] ; 
    let cmp = db.get('users').find({id}).value() ;
    if (!cmp){
        db.get('users').push({id,pass,projects}).write() ;
        console.log('Đăng kí thành công') ; 
        res.redirect('/user/login') ;
    }
    else {
        console.log('Tài khoản đã tồn tại') ; 
        res.redirect('/user/register') ; 
    }
}
module.exports.postLogin = function(req,res){
    let id = req.body.id ; 
    let pass = md5(req.body.pass) ; 
    let cmp = db.get('users').find({id}).value() ; 
    if (cmp){
        if (pass === cmp.pass) console.log('Đăng nhập thành công') ; 
        res.cookie('id',id,{
            signed : true 
        }) ; 
        res.redirect('/user/dashboard') ; 
        return ; 
    }
        console.log('Sai mật khẩu hoặc tài khoản không tồn tại') ; 
        res.redirect('/user/login') ; 
}