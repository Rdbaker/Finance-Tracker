var FinanceTrackerControllers = angular.module('FinanceTrackerControllers', []);

FinanceTrackerControllers.controller('trackingListCtrl', ['$scope', '$http',
    function($scope, $http) {
        $http.get('tracking/tracking.json').success(function(data) {
            $scope.tracking = data;
        });

        $scope.orderProp="created";
    }
]);

FinanceTrackerControllers.controller('trackingDetailCtrl', ['$scope', '$routeParams', '$http', 
    function($scope, $routeParams, $http) {
        $http.get('tracking/'+ $routeParams.trackId +'-detail.json').success(function(data) {
            $scope.track = data;
        })
    }
]);
