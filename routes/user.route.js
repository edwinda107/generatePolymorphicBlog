var express = require('express') ; 
var router = express.Router() ;
var controller = require('../controllers/user.controllers') ; 

router.get('/login',controller.login) ;
router.get('/register',controller.register) ;  


module.exports = router ;