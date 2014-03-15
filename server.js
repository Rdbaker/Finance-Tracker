// set up the app with proper reuirements
var express = require('express');
var app = express();
var mongoose = require('mongoose');

var port = process.env.PORT || 8081;

mongoose.connect('mongodb://finance:tracker@novus.modulusmongo.net:27017/ruZiw8ab');

app.configure(function() {
    app.use(express.static(__dirname + "./public")); // static files location
    app.use(express.logger('dev'));                   // log requrests to console
    app.use(express.bodyParser());                    // to see the body of the req
    app.use(express.methodOverride());
});


// Schema
var trackerSchema = mongoose.Schema({
    name: String,
    lastUpdate: Date,
    created: Date,
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
app.get('/api/finances', function(req, res) {
    tracker.find(function(err, trackers) {
        if(err){
            res.send(err);
        } else {
            res.json(trackers);
        }
    });
});

app.post('/api/create', function(req, res) {
    var date = new Date();
    tracker.create({
        name: req.body.tracker.name,
        lastUpdate: date,
        created: date,
        xlabel: req.body.tracker.xlabel,
        ylabel: req.body.tracker.xlabel,
        date: []
    }, function(err, tracker) {
        if (err)
            res.send(err);
        tracker.find(function(err, trackers) {
            if (err)
                res.send(err);
            res.json(trackers);
        });
    });
});

app.delete('/api/finances/:trackId', function(req, res) {
    tracker.remove({
        _id: req.params.trackId
        }, function(err, todo) {
            if (err)
                res.send(err);
            tracker.find(function(err, trackers) {
                if (err)
                    res.send(err);
                res.json(trackers);
            });
        }
    );
});

app.get('*', function(req, res) {
    res.sendfile('./public/index.html');
});


app.listen(port);
console.log("listening on port "+ port);
