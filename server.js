var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('cookie-session');
var mongoose = require('mongoose');

var db = mongoose.connect(process.env.db||'mongodb://maxboyko-pinterest-clone-3739255');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(session({
    secret: 'dev',
}));

require('./server-side/config/passport')(app);

app.use(express.static(__dirname + '/public'));

var authRouter = require('./server-side/routes/auth');
var apiRouter = require('./server-side/routes/api');

app.use('/auth', authRouter);
app.use('/api', apiRouter);

process.on('uncaughtException', err => {
    if (err) {
        console.log(err, err.stack);
    }
});
app.listen(process.env.PORT, process.env.IP, () => {
    console.log('The server is listening on ' + process.env.PORT);
});