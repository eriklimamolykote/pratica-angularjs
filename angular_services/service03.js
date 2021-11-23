var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $timeout) {
    $scope.myHeader = "OLÁ, MUNDO!";
    $timeout(function() {
        $scope.myHeader = "COMO VOCÊ ESTÁ HOJE?";
    }, 2000);
});