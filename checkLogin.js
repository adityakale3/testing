const jwt = require('jsonwebtoken');

// CHECK LOGIN
function checkLogin(req,res,next){
    var myToken = localStorage.getItem('mytoken');
    try{
        jwt.verify(myToken, 'loginToken');
        console.log('Token Verified');
    } catch (err) {
        console.log('Token NOT FOUND');
       // console.log(err);
        res.send('You are not authorized to view this page');
    }
    next();
}


module.exports = checkLogin;