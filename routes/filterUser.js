const express = require('express');
var router = express.Router();
const abc = require('../models/mongoDB');


router.get('/', (req,res) => {

     abc.find({},function(err,data){
            if(err){
                console.log(err);
            } 
         res.render('./filterUsers', {title : 'Filter Users', datas:data});
        }) 
    });





module.exports = router;