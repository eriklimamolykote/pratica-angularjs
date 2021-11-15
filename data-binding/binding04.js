var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.firstname = "Erik";
    $scope.changeName = function() {
        $scope.firstname = "Bianca";
    }
});