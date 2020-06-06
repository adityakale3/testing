const express = require('express');
var router = express.Router();
const multer = require('multer');
const path = require('path');
const bodyParser = require('body-parser');

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
         res.render('./upload', {title : 'Upload Image', success : ''});
   });

router.post('/', upload, (req,res) => {
    var success = req.file.filename + " Uplaoded Successfully";
    res.render('./upload', {title : 'Upload Image', success : success});
});





module.exports = router;