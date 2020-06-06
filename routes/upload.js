const express = require('express');
var router = express.Router();
const multer = require('multer');
const path = require('path');
const bodyParser = require('body-parser');
const uploadModel = require('../models/uploadSchema');

var imagefiledata = uploadModel.find({}); 

router.use(express.static(path.join(__dirname, 'public')));

var storage = multer.diskStorage({
    destination : "./public/uploads",
    filename : (req,file,cb) => {
        cb(null,file.fieldname + "_" + Date.now() + path.extname(file.originalname));
    }
});

var upload = multer({
    storage:storage
}).single('file');


var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/', (req,res) => {
    imagefiledata.exec((err,data) => {
        if(err) throw err;
        res.render('./upload', {title : 'Upload Image', success : '', datas:data});
    });

   });

router.post('/', upload, (req,res) => {
    var uploadFile = req.file.filename;

    var imagedetails = new uploadModel({
        filename:uploadFile
    });

    imagedetails.save( (err,doc) => {
            if(err) throw err;

        imagefiledata.exec((err,data) => {
            var success = req.file.filename + " Uplaoded Successfully";
            res.render('./upload', {title : 'Upload Image', success : success, datas:data});
        });
    });


});





module.exports = router;