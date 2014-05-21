// set up the app with proper reuirements
var express = require('express');
var mongoose = require('mongoose');
var app = express();

var port = process.env.PORT || 8081;

mongoose.connect('mongodb://127.0.0.1:27017/test');

// database models and schema -----------------------------------------
var Schema = mongoose.Schema
    , ObjectId = Schema.Types.ObjectId;


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));

var trackingSchema = mongoose.Schema({
	name : String,
	created : { type : Date, default : Date.now },
    entries : { type : Number, default : 0 }
});

var tracking = mongoose.model('tracking', trackingSchema);

var trackerSchema = mongoose.Schema({
	name : String,  // should also be the same as the 'tracking'
	x    : String,  // the x axis name
	y    : String,  // the y axis name
	data : [{ x : Number, y : Number }], // the data in the tracker to be graphed
    parent : ObjectId
});

var tracker = mongoose.model('tracker', trackerSchema);


// configure the app -----------------------------------------------------------


app.configure(function() {
    app.use(express.static(__dirname + "/public")); // static files location
    app.use(express.logger('dev'));                   // log requrests to console
    app.use(express.bodyParser());                    // to see the body of the req
    app.use(express.methodOverride());
    app.use(express.favicon(__dirname + "/public/images/favicon.ico"));
});


// routes ---------------------------------------------------------------------

// get all the tracking overviews
app.get('/api/finances', function(req, res) {
    tracking.find(function(err, data) {
        if (err) {
            res.send(err)
        }
        res.json(data)
    });
});

// get the info for one tracker
app.get('/api/finances/:trackId', function(req, res) {
    tracker.findOne({ 
        parent : req.params.trackId
    }, function(err, data) {
        if (err) {
            res.send(err)
        }
        res.json(data)
    });
});

// create a new tracking overview and a tracker detail
app.post('/api/create', function(req, res) {
    // create tracking overview
    tracking.create({
        name : req.body.name
    }, function(err, newtracking) {
        if (err)
            res.send(err);
        // create tracker detail
        tracker.create({
            name : req.body.name,
            x    : req.body.xlabel,
            y    : req.body.ylabel,
            parent : newtracking._id
        }, function(err, newtracker){
            if (err)
                res.send(err);
            res.send({
                redirectTo : '/finances'
            });
        });
    });
});

// delete a tracking overview and a tracker detail
app.delete('/api/finances/:trackId', function(req, res) {
    // remove the tracking overview
    tracking.remove({
        _id : req.params.trackId
    }, function(err, del_tracking) {
        if(err)
            res.send(err);

        // delete the tracker detail
        tracker.remove({
            name : del_tracking.name
        }, function(err, del_tracker) {
            if (err)
                res.send(err);
            res.send({
                redirectTo : '/finances'
            });
        });
    });
});

app.get('*', function(req, res) {
    res.sendfile('./public/index.html');
});


app.listen(port);
console.log("listening on port "+ port);
