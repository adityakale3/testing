const express = require('express');
var router = express.Router();
const abc = require('../models/mongoDB');
const emp = abc.find({});
const bodyParser = require('body-parser');

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/', (req,res) => {

     abc.find({},function(err,data){
            if(err){
                console.log(err);
            } 
         res.render('./filterUser', {title : 'Filter Users', datas:data});
        }) 
    });


router.post('/search',urlencodedParser, (req,res) => {
    console.log('===================================================');
    var filterName = req.body.filtrname;
    var filterEmail = req.body.filtremail;
    var filterEmp = req.body.filtremptype;

    // CHECK FOR ALL
    if(filterName != '' && filterEmail != '' && filterEmp != ''){
        var filterParams = { $and : [{name : filterName}, {
             $and : [{email:filterEmail} , {etype : filterEmail}]
                }
            ]}
    // CHECK FOR 2        
    }else if(filterName != '' && filterEmail == '' && filterEmp != ''){
        var filterParams = { $and : [{name : filterName}, {etype : filterEmp}] }     
    }else if(filterName == '' && filterEmail != '' && filterEmp != ''){
        var filterParams = { $and : [{etype : filterEmp}, {email : filterEmail}] }     
    }else if(filterName == '' && filterEmail == '' && filterEmp != ''){
        var filterParams = { etype : filterEmp}     
    }else{
        var filterParams = {};
    }
    console.log(filterParams);
    var employeeFilter = abc.find(filterParams);

    employeeFilter.exec( (err,data) => {
        if(err) throw err;
        console.log(data);
        res.render('./filterUser', {title : 'Filter Users', datas:data});
    });

});


module.exports = router;