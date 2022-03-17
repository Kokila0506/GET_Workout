var app = angular.module('welcomeApp', []);

app.controller('WelcomeContrl', function ($scope, myService) {
    $scope.UserMsg = myService.message; 
}); 