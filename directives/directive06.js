var app = angular.module("myApp", []);
app.directive("w3TestDirective", function() {
    return {
        restrict: "A",
        template: "<h1>Feito por uma diretiva</h1>"
    };
});