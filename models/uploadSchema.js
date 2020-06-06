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


var uploadSchema = new mongoose.Schema({
    filename:String
});

const uploadModel = mongoose.model('uploads', uploadSchema, 'uploads');

module.exports = uploadModel;