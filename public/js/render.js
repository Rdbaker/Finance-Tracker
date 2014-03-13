// instantiate the data
var xlabel, ylabel;
var cDataSource = [];
var path = window.location.hash.split('/');

$.getJSON("tracking/db/"+ path[path.length-1] +"-detail.json", function(data) {
    xlabel = data["x"];
    ylabel = data["y"];

    for (var d in data['data']) {
        // create the object to push into chDataSource
        point = {};
        point.x = Number(data['data'][d]['x']);
        point.y = Number(data['data'][d]['y']);

        cDataSource.push(point);
    }
}).done(function() {
    $('#chartContainer').dxChart({
        dataSource:cDataSource,
        series: {
            argumentField: xlabel,
            name: ylabel,
            valueField: ylabel,
            type: 'line',
            point: {
                hoverMode: 'allArgumentPoints'
            }
        },
        crosshair: {
            enabled: true
        },
        tooltip: {
            enabled: true,
            shared: true
        }
    })
});
