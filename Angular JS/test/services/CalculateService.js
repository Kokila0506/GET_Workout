mainApp.service('CalcService', function() {
     
    this.square = function(a) {
        return parseInt(a) * parseInt(a)
    }

    this.mul = function(a,b) {
        return parseInt(a) * parseInt(b)
    }
         
    this.add = function(a, b) {
       return parseInt(a) + parseInt(b);
    }
    this.div = function(a, b) {
         return parseInt(a) / parseInt(b);
    }

 });

 /*var multipicationService = angular.module('multipicationService', [])
.service('multiply', function () {
    this.Mul = function (a, b) { return a * b };
 
});
 
  });*/