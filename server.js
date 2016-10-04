var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('cookie-session');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(session({
    secret: 'dev',
}));

require('./server-side/config/passport')(app);

app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT, process.env.IP, () => {
   console.log('The server is listening on ' + process.env.PORT);
});