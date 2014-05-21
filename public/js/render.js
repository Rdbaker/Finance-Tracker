// instantiate the data
var xlabel, ylabel;
var cDataSource = [];

$(document).ready(function() {
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
