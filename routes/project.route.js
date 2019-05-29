var express = require('express') ; 
var router = express.Router() ;
var db = require('../db') ;
var controller = require('../controllers/project.controllers') ;  

router.get('/create',controller.create);
router.get('/',controller.project) ; 


router.post('/create',controller.postCreate) ; 
module.exports = router ; 