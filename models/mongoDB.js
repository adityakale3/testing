const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/students', {useNewUrlParser:true, useUnifiedTopology: true});
var conn = mongoose.connection;

conn.on('connected', () => {
    console.log('DB Connected');
});
// DB CON
conn.on('disconnection', () => {
    console.log('DB Dis-connected');
});
// DB CON
conn.on('error', console.error.bind(console,'connection error:'));


var employeeSchema = new mongoose.Schema({
    name:String,
    email:String,
    etype:String,
    hourlyrate:Number,
    totalHrs:Number
});

// var employeeSchema = new mongoose.Schema({
//     name:String,
//     email:String,
//     courseCount:Number
// });

// const employeeModel = mongoose.model('users', employeeSchema, 'users');
const employeeModel = mongoose.model('employees', employeeSchema, 'employees');

module.exports = employeeModel;