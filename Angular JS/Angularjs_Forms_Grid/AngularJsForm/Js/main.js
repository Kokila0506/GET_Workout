var app = angular.module('MyApp', [])
    app.controller('MyController', function ($scope,dataService,storageService)  {
       
        $scope.Login = function ( ) {

            var item = dataService.UserDetails.find(obj => obj.username==$scope.Name && obj.password==$scope.password);
            if(item!=null)
            {
                storageService.setStorageItem("userDetail",JSON.stringify(item)); 
               var temp =storageService.getStorageItem("userDetail");
                window.location.href="direct.html";             
                //alert(item);
            }
            else {
                alert("Invalid Login");
            }

           /* if(($scope.Name) == "admin" && $scope.password == "password" ) {
                $window.alert("Login Sucessful!!");
                window.location.href="data.html";
                return ;      
            }
            else {
                $window.alert("Invalid Login");
            }           
         } */       
    }
});

