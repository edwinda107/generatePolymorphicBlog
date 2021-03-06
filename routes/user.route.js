var express = require('express') ; 
var router = express.Router() ;
var db = require('../db') ; 
var controller = require('../controllers/user.controllers') ; 
var authMiddleware = require('../middlewares/auth.middleware') ; 
router.get('/login',controller.login) ;
router.get('/logout',controller.logout) ; 
router.get('/register',controller.register) ; 
router.get('/dashboard',authMiddleware.reqAuth,controller.dashboard) ; 



router.post('/login',controller.postLogin) ; 
router.post('/register',controller.postRegister) ;  


module.exports = router ;