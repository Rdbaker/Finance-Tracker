// set up the app with proper reuirements
var express = require('express');
var app = express();
var mongoose = require('mongoose');

var port = process.env.PORT || 8081;

mongoose.connect('mongodb://finance:tracker@novus.modulusmongo.net:27017/ruZiw8ab');

app.configure(function() {
    app.use(express.static(__dirname + "../public")); // static files location
    app.use(express.logger('dev'));                   // log requrests to console
    app.use(express.bodyParser());                    // to see the body of the req
    app.use(express.methodOverride());
});


// Schema
var trackerSchema = mongoose.Schema({
    name: String,
    lastUpdate: Date,
    created: Date.now,
    xlabel: String,
    ylabel: String,
    data: [{
        x: Number,
        y: Number
    }]
});

// model
var tracker = mongoose.model('tracker', trackerSchema);


// routes ----------------------------
app.get('/finances', function(req, res) {
    tracker.find(function(err, trackers) {
        if(err){
            res.send(err);
        } else {
            res.json(trackers);
        }
    });
});

app.post('/create', function(req, res) {
    tracker.create({
        name: req.body.tracker.name
});


app.listen(port);
console.log("listening on port "+ port);
