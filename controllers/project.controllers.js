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
    let pass = md5(req.body.pass) ; 
    let numberTab = 0 ; 
    let tab = [] ; 
    let user = res.locals.user ;

    if (user.pass !== pass){
        res.redirect('/project/create') ; 
        return ; 
    }   
    user.projects.push({name,des,numberTab,tab});  
    db.get('users').find({id : user.id}).assign(user).write() ; 
    res.redirect('/project') ;
}
module.exports.postDelete = function(req,res){
    let pass = md5(req.body.pass) ; 
    let choose = req.body.choose ; 
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
    db.get('users').find({id: user.id}).assign(user).write() ; 
    res.redirect('/project') ; 
}