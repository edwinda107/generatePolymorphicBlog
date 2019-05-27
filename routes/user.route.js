var express = require('express') ; 
var router = express.Router() ;
var db = require('../db') ; 
var controller = require('../controllers/user.controllers') ; 

router.get('/login',controller.login) ;
router.get('/register',controller.register) ; 
router.get('/dashboard',controller.dashboard) ; 



router.post('/login',controller.postLogin) ; 
router.post('/register',controller.postRegister) ;  


module.exports = router ;