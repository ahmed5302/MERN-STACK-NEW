var express = require('express');

var mongoConnect = require('./db/connectdb');

var app = express();
mongoConnect();

app.use(express.json({
    extended: false
}));

app.get('/', function (req, res) {
    res.send('Hello TEST DQWD sdv World!');
});

app.use('/user', require('./routes/user'));
app.use('/auth', require('./routes/auth'));
app.use('/addemp', require('./routes/addemp'));
app.use('/updemp', require('./routes/updemp'));

app.listen(5000, function () {
    console.log('Example app listening osdcsd n port 5000!');
});