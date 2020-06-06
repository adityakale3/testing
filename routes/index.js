const express = require('express');
var router = express.Router();
const checkLogin = require('../checkLogin');


router.get('/',checkLogin, (req,res) => {
    res.render('./index', {title : 'My First Web', data: {title:'How u doin', msg:'They are lobsters'} });
});


module.exports = router;