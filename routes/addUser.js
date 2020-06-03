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
        console.log(req.body.name,req.body.email,req.body.etype,req.body.hourlyrate,req.body.totalHrs,);
    });




module.exports = router;