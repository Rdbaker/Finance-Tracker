// set up the app with proper reuirements
var express = require('express');
var mongoose = require('mongoose');
var app = express();

var port = process.env.PORT || 8081;

mongoose.connect('mongodb://127.0.0.1:27017/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));


app.configure(function() {
    app.use(express.static(__dirname + "/public")); // static files location
    app.use(express.logger('dev'));                   // log requrests to console
    app.use(express.bodyParser());                    // to see the body of the req
    app.use(express.methodOverride());
    app.use(express.favicon(__dirname + "/public/images/favicon.ico"));
});


// routes ----------------------------
app.get('/api/finances', function(req, res) {

});

app.post('/api/create', function(req, res) {
    var date = new Date();
});

app.delete('/api/finances/:trackId', function(req, res) {
});

app.get('*', function(req, res) {
    res.sendfile('./public/index.html');
});


app.listen(port);
console.log("listening on port "+ port);
