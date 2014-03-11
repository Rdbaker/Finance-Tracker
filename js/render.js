// instantiate the data
var xlabel, ylabel;
var cDataSource = [];
var path = window.location.hash.split('/');
console.log('first');

// load the json file
$.getJSON("tracking/"+ path[path.length-1] +"-detail.json", function(data) {
    xlabel = data["x"];
    ylabel = data["y"];/**
    for (var d in data['data']){
        console.log(Number(d));// this is the index of the list
        console.log(data['data'][d]);// this is the object containing the coords
        console.log(data['data'][d]['x']);// this is the xvalue in quotes
        console.log(Number(data['data'][d]['x']));// this is the xval no quotes
        console.log(data['data'][d]['y']);// this is the yval in quotes
        console.log(Number(data['data'][d]['y']));// this is the yval no quotes
    }**/
    for (var d in data['data']) {
        // create the object to push into chDataSource
        point = {};
        point.x = Number(data['data'][d]['x']);
        point.y = Number(data['data'][d]['y']);

        cDataSource.push(point);
    }
    console.log('fourth');
});
/**
$(function () {
    console.log("here");
    console.log(ylabel);/**
    $('#chartContainer').dxChart({
        dataSource: loadData()[0],
        series: {
            argumentField: loadData()[1],
            name: loadData()[3], 
            valueField: loadData()[2],
            type: "bar"
        }
    });
    $("#chartContainer").dxChart({
        dataSource: chartDataSource,
    });
});

$(function() {
    console.log("second");
**/

$.getJSON("tracking/"+ path[path.length-1] +"-detail.json", function(data) {
    xlabel = data["x"];
    ylabel = data["y"];/**
    for (var d in data['data']){
        console.log(Number(d));// this is the index of the list
        console.log(data['data'][d]);// this is the object containing the coords
        console.log(data['data'][d]['x']);// this is the xvalue in quotes
        console.log(Number(data['data'][d]['x']));// this is the xval no quotes
        console.log(data['data'][d]['y']);// this is the yval in quotes
        console.log(Number(data['data'][d]['y']));// this is the yval no quotes
    }**/
    for (var d in data['data']) {
        // create the object to push into chDataSource
        point = {};
        point.x = Number(data['data'][d]['x']);
        point.y = Number(data['data'][d]['y']);

        cDataSource.push(point);
    }
    console.log('third');
}).done(function() {
    $('#chartContainer').dxChart({
        dataSource:cDataSource,
        series: {
            argumentField: 'x',
            name: 'y',
            valueField: 'y',
            type: 'bar'
        }
    })
});

/**


    $('#chartContainer').dxChart({
        dataSource: cDataSource,
        series: {
            argumentField: 'x',
            name: 'y',
            valueField: 'y',
            type: 'bar'
        }
    });
});**/
