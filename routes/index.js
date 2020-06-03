const express = require('express');
var router = express.Router();



router.get('/', (req,res) => {
    res.render('./index', {title : 'My First Web', data: {title:'How u doin', msg:'They are lobsters'} });
});


module.exports = router;