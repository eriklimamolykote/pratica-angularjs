var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
    $http.get("wronfilename.htm")
    .then(function(response) {
        $scope.content = response.data;
    }, function(response) {
        $scope.content = "GAME OVER - ALGUMA COISA DEU ERRADO";
    });
});