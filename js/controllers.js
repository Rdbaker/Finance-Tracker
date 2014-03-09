var FinanceTrackerApp = angular.module('FinanceTrackerApp', []);

FinanceTrackerApp.controller('trackerListCtrl', function ($scope) {
  $scope.tracking = [
    {'name': 'Groceries',
     'snippet': 'Fast just got faster with Nexus S.'},
    {'name': 'Eating Out',
     'snippet': 'The Next, Next Generation tablet.'},
    {'name': 'Guitars',
     'snippet': 'The Next, Next Generation tablet.'}
  ];
});
