var app = angular.module('mainApp', []);

app.controller('myController', function ($scope, myService) {
    myService.message="kumar";
    $scope.serviceMsg = myService.message; 
}); 