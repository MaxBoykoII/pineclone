var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT, process.env.IP, () => {
   console.log('The server is listening on ' + process.env.PORT);
})