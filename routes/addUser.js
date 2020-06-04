const express = require('express');
var router = express.Router();
const abc = require('../models/mongoDB');
const bodyParser = require('body-parser');

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/', (req,res) => {

     abc.find({},function(err,data){
            if(err){
                console.log(err);
            } 
         res.render('./addUser', {title : 'Add Users', datas:data});
        }) 
    });

    router.post('/', urlencodedParser, (req,res) => {
        var addData = new abc ({
            name:req.body.uname,
            email:req.body.email,
            etype:req.body.emptype,
            hourlyrate:req.body.hrlyrate,
            totalHrs:req.body.ttlhr
        });
        addData.save((err,res1) => {
            console.log(addData);
 
            abc.find({},function(err,data){
                if(err){
                    console.log(err);
                } 
             res.render('./users', {title : 'Users', datas:data});
            });           
        });
    });




module.exports = router;