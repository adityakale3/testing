const express = require('express');
const app = express();
const path = require('path');
const jwt = require('jsonwebtoken');

const index = require('./routes/index');
const users = require('./routes/users');
const addUser = require('./routes/addUser');
const filterUser = require('./routes/filterUser');
const upload = require('./routes/upload');
const checkLogin = require('./checkLogin');

if(typeof localStorage === 'undefined' || localStorage === null){
    console.log('Not found LocalStorage');
    const LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
}else{
    console.log('Found LocalStorage');
}



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', index);
app.use('/users',users);
app.use('/addUser',addUser);
app.use('/filterUser',filterUser);
app.use('/upload',upload);

app.get('/login', (req,res) => {
    var token = jwt.sign({ foo : 'bar' }, 'loginToken');
    localStorage.setItem('mytoken', token);
    console.log(localStorage.getItem('mytoken'));
    res.send('Logged In Successfully');
});

app.get('/logout', (req,res) => {
    localStorage.removeItem('mytoken');
    res.send('Logout Successfully');
});


app.get('/aditya',checkLogin, (req,res) => {
    console.log(localStorage.getItem('mytoken'));
    res.send('Welcome Aditya' + localStorage.getItem('mytoken'));
});


app.listen(3000, () => {
    console.log('Server up and Running');
})