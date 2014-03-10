var FinanceTrackerApp = angular.module('FinanceTrackerApp', [
    'ngRoute',
    'FinanceTrackerControllers'
]);

FinanceTrackerApp.config(['$routeProvider',
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
            otherwise({
                redirectTo: '/finances'
            });
        }
]);
