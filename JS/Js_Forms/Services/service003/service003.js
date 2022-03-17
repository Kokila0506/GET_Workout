var myApp=angular.module("myApp", []);
myApp.controller("firstCtrl", function($scope, $timeout) {
    $scope.username="Kokila";

    setTimeout(function() {
        $scope.username="Jeevarathinam";
        alert("Updated variable "+$scope.username);
    },2000)
})