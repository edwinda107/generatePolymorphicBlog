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
module.exports.detail = function(req,res){
    let status = [] ; 
    let iProject = req.params.iProject ;
    let user = db.get('users').find({id : res.locals.user.id}).value()  ; 
    for (let i = 0 ; i < 6 ; i++){
        if (user.projects[iProject].tab[i].act) status[i] = 'Đã kích hoạt' ; else status[i] = 'Chưa kích hoạt' ;
    }
    console.log(user) ; 
    res.render('detailProject',{user, iProject,status}) ; 
}
module.exports.postCreate = function(req,res){
    let name = req.body.name ; 
    let des = req.body.des ; 
    let pass = md5(req.body.pass) ; 
    let numberTab = 0 ; 
    let tab = [
        { name : "Tab 1" , act : false ,  post : [] } , 
        { name : "Tab 2" , act : false , post : [] } , 
        { name : "Tab 3" , act : false , post : [] } , 
        { name : "Tab 4" , act : false , post : [] } , 
        { name : "About us", act : false , content: ""} ,
        { name : "Contact", act : false , content: ""}
    ] ; 
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