const express = require('express');
const app = express();
const path = require('path');

const index = require('./routes/index');
const users = require('./routes/users');
const addUser = require('./routes/addUser');
const filterUser = require('./routes/filterUser');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use('/',index);
app.use('/users',users);
app.use('/addUser',addUser);
app.use('/addUser',filterUser);


app.listen(3000, () => {
    console.log('Server up and Running');
})