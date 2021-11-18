angular.module('myApp', 
    []).controller('personCtrl', function($scope) {
        $scope.firstName = "Erik",
        $scope.lastName = " Lima"
        $scope.fullName = $scope.firstName + $scope.lastName;
});