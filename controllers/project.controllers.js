var db = require('../db') ; 
var md5 = require('md5') ; 
module.exports.create = function(req,res){
    res.render('projectCreate') ; 
}
module.exports.delete = function(req,res){
    let temp = res.locals.user ; 
    let user = db.get('users').find({id : temp.id}).value() ; 
    res.render('projectDelete',{user}) ; 
}
module.exports.project = function(req,res){
    let temp = res.locals.user ; 
    let user = db.get('users').find({id : temp.id}).value() ; 
    res.render('project' , {user}) ; 
}
module.exports.postCreate = function(req,res){
    let name = req.body.name ; 
    let des = req.body.des ; 
    let numberTab = 0 ; 
    let tab = [] ; 
    let user = res.locals.user ;  
    //console.log(user) ; 
    user.projects.push({name,des,numberTab,tab});  
    console.log(user) ; 
    //let temp = db.get('users').find({id : user.id}).value() ; 
    db.get('users').find({id : user.id}).assign(user).write() ; 
    res.redirect('/project') ;
}
module.exports.postDelete = function(req,res){
    let pass = md5(req.body.pass) ; 
    let choose = req.body.choose ; 
    //console.log(pass,' ' , choose) ;
    let temp = res.locals.user ; 
    let user = db.get('users').find({id : temp.id}).value() ; 
    if (pass !== user.pass){
        res.redirect('/project/delete') ; 
        return ; 
    }
    for (let i = 0 ; i < user.projects.length ; i++){
        if (user.projects[i].name === choose){
            user.projects.splice(i,1) ; 
        }
    }
    console.log(user) ; 
    db.get('users').find({id: user.id}).assign(user).write() ; 
    res.redirect('/project') ; 
}