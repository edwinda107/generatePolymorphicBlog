var express = require('express') ; 
var router = express.Router() ;
var db = require('../db') ;
var controller = require('../controllers/project.controllers') ;  

router.get('/create',controller.create);
router.get('/delete',controller.delete) ;  
router.get('/',controller.project) ; 


router.post('/create',controller.postCreate) ; 
router.post('/delete',controller.postDelete) ; 
module.exports = router ; 