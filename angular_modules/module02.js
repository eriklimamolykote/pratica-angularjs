var app = angular.module("myApp", []);
app.directive("directive", function() {
    return {
        template: "<p id='result'>Eu fui feito numa diretiva!</p>"
    };
});