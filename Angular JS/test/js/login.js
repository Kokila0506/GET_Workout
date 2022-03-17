var app=angular.module("myapp", []);
app.service("LoginService", function() {
    this.validuser=function(uid,pwd)
    {
        var str="";
        if(uid=="admin" && pwd=="password")
        {
              str="welcome to"+uid;
        }
        else{
            str="invalid userid or password";
        }
        return str; 
    };
});

app.controller("Democontroller",function($scope,LoginService) {
    $scope.username="";
    $scope.password="";
    $scope.f1=function()
    {
        $scope.message=LoginService.validuser($scope.username,$scope.password);
    };
})