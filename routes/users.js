const express = require('express');
var router = express.Router();
const abc = require('../models/mongoDB');
const checkLogin = require('../checkLogin');

router.get('/',checkLogin, (req,res) => {

     abc.find({},function(err,data){
            if(err){
                console.log(err);
            } 
         res.render('./users', {title : 'Users', datas:data});
        }) 
    });
    
module.exports = router;