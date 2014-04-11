var FinanceTrackerApp = angular.module('FinanceTrackerApp', [
    'ngRoute',
    'FinanceTrackerControllers'
]);

FinanceTrackerApp.config(['$routeProvider', '$locationProvider',
    function($routeProvider) {
        $routeProvider.
            when('/finances', {
                templateUrl: 'partials/tracking-list.html',
                controller: 'trackingListCtrl'
            }).
            when('/finances/:trackId', {
                templateUrl: 'partials/tracking-detail.html',
                controller: 'trackingDetailCtrl'
            }).
            when('/create', {
                templateUrl: 'partials/create.html',
                controller: 'createTrackerCtrl'
            }).
            otherwise({
                redirectTo: '/finances'
            });
    }
    $locationProvider.html5Mode(true);
]);
