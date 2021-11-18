angular.module('myApp', 
    []).controller('personCtrl', function($scope) {
        $scope.firstName = "(C)",
        $scope.lastName = "SEGA. 1988"
        $scope.fullName = $scope.firstName + $scope.lastName;
});