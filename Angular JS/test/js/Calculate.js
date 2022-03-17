var mainApp = angular.module("mainApp", []);
      
mainApp.controller('CalcController', function($scope, CalcService) {
   $scope.square = function() {
      $scope.result = CalcService.square($scope.number);
   
   };  

   $scope.mul = function() {
      $scope.result1 = CalcService.mul($scope.number1, $scope.number2);
   };

   $scope.add = function() {
      $scope.result2 = CalcService.add($scope.number3, $scope.number4);
   }

   $scope.div = function() {
      $scope.result3 = CalcService.div($scope.number5, $scope.number6);
   }
  
});

/*var myApp = angular.module('mainApp', ['multipicationService']);
myApp.controller('myController', function ($scope, multiply ) {
    $scope.number1 = 5;
    $scope.number2 = 6;

 
    $scope.findMul = function () {
        $scope.answer1 = multiply.Mul($scope.number1, $scope.number2);
    };
    $scope.findMul();
    
    
 
});*/