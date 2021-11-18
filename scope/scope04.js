var app = angular.module('myApp', []);
app.run(function ($rootScope) {
    $rootScope.colo = 'blue';
});
app.controller('myCtrl', function($scope) {
    $scope.color = "red";
});