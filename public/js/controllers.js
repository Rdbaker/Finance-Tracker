var FinanceTrackerControllers = angular.module('FinanceTrackerControllers', []);

FinanceTrackerControllers.controller('trackingListCtrl', ['$scope', '$http',
    function($scope, $http) {

        $scope.delete = function(id) {
            $http.delete('/api/finances/' + id)
                .success(function(res) {
                    if(res.redirectTo) {
                        window.location = res.redirectTo;
                    }
                })
                .error(function(data) {
                    console.log("Error: " + data);
                });
        }

        $http.get('api/finances').success(function(data) {
            $scope.tracking = data;
        });

        $scope.orderProp="created";
    }
]);

FinanceTrackerControllers.controller('trackingDetailCtrl', ['$scope', '$routeParams', '$http', 
    function($scope, $routeParams, $http) {

        $scope.newPoint = function(x, y) {
            $http.post
            // TODO finish this method
        }

        $http.get('/api/finances/'+ $routeParams.trackId)
            .success(function(data) {
                $scope.track = data;
            })
            .error(function(err) {
                console.log("Error: " + err);
            });
    }
]);

FinanceTrackerControllers.controller('createTrackerCtrl', ['$scope', '$http',
    function($scope, $http) {
        $scope.create = function(tracker) {
            $http.post('api/create', tracker)
                .success(function(res) {
                    if(res.redirectTo) {
                        window.location = res.redirectTo;
                    }
                })
                .error(function(err) {
                    console.log("Error: " + err);
                });
        }
    }
]);


