/*var datas = {
    'username' : admin ,
    'password' : password
}

localStorage.setItem("sample_data", JSON.stringify($scope));
localStorage.setItem("");*/

/*app.service('storageService', function() {
    this.index = 'admin';
    this.myFunc = function(newData) {
        this.index  = newData;
        return this.index;
    }
})*/

/*localStorage.user = JSON.stringify({username:"koki"});
let user = JSON.parse(localStorage.user);
alert( user.username);*/

app.service('storageService', function () {

    this.getStorageItem = function (key) {        
        return localStorage.getItem(key);
    };



    this.setStorageItem = function (key,data) {        
       localStorage.setItem(key,data);
    };
     // if(storageService.getItem('userDetail') != null){
    //     $scope.data = JSON.parse(storageService.getItem('userDetail'));
    //     //$scope.env = localStorage.getItem("env");
    //  }
    

});
