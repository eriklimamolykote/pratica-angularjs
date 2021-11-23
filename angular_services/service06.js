var app = angular.module('myApp', []);
app.service('hexafy', function() {
    this.myFunc = function(x) {
        return x.toString(16);
    }
});
app.filter('myFormat', ['hexafy', function(hexafy){
    return function(x) {
        return hexafy.myFunc(x);
    };
}]);
app.controller('myCtrl', function($scope) {
    $scope.counts = [255, 251, 200];
});