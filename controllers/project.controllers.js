var db = require('../db') ; 
module.exports.create = function(req,res){
    res.render('projectCreate') ; 
}
module.exports.project = function(req,res){
    res.render('project') ; 
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
    let temp = db.get('users').find({id : user.id}).value() ; 
    db.get('users').find({id : user.id}).assign(user).write() ; 
    res.redirect('/project') ;
}