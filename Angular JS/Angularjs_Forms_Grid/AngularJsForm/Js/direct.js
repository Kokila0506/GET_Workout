agGrid.initialiseAgGridWithAngular1(angular);

var module = angular.module("app", ["agGrid"]);

module.controller("Ctrl", function($scope, $window) {

    var columnDefs = [
        {headerName: "Employee Id", field: "id",filter: 'agTextColumnFilter'},     
        {headerName: "Employee Name", field: "name", filter: PersonFilter },
        {headerName: "Employee Age", field: "age",filter: 'agNumberColumnFilter'},
        {headerName: "Employee Gender", field: "gender",filter: 'agTextColumnFilter'},
        {headerName: "Year of Joining", field: "year",filter: YearFilter},
        {headerName: "Employee Salary", field: "salary",filter: 'agNumberColumnFilter'},
        {headerName: "Employee Role", field: "role" ,filter: 'agTextColumnFilter'}];
 
  $scope.rowData = [
        {id: "3001", name: "Kokila",age:20,gender:"Female",year: 2010,salary: 25000, role:"Developer"},
        {id: "3002", name: "Hari",age:22,gender:"Male",year: 2009, salary: 27000, role:"Testing"},
        {id: "3003", name: "Maha",age:23,gender:"Female",year: 2012, salary: 28000, role:"Data Analytics"},
        {id: "3004", name: "Darshini",age:25,gender:"Female",year: 2010, salary: 39000, role:"Testing"},
        {id: "3005", name: "Naveen",age:21,gender:"Male",year: 2011, salary: 20000, role:"Developer"},
        {id: "3006", name: "Jeeva",age:22,gender:"Male",year: 2010, salary: 39000, role:"Engineer"},
        {id: "3007", name: "Riya",age:30,gender:"Female",year: 2017, salary: 39000, role:"Manager"}];
        
    $scope.gridOptions = {
        columnDefs: columnDefs,
        rowData:  $scope.rowData, 
        filter: true,  
                 
        defaultColDef: {
            // set the default column width
            width: 200,
            floatingFilter: true,
          },
             
    };

    // $scope.openForm = function() {
    // //   // $scope.gridOptions.api.
    // //   // $scope.gridOptions.api.myForm($scope.openForm);
    // //   // $('#myForm').modal('show');
    //   // $scope.gridOption.myForm.openForm(block);

    //   alert("kokila");
    // }

    // $scope.clearFilters = function() {
    //     $scope.gridOptions.api.setFilterModel(null);
    // }
 
    $scope.showDiv = function() {
      $scope.showhideprop = true;
     
    }

    $scope.hideDiv = function() {
      $scope.showhideprop = false;
    }

    $scope.addRow = function () {
      if ($scope.id != "" && $scope.name != "" && $scope.age != "" && $scope.gender != "" && $scope.year != "" && $scope.salary != "" && $scope.role != ""  ) {
          var data = [];
          data.id = $scope.id;
          data.name = $scope.name;
          data.age = $scope.age;
          data.gender = $scope.gender;
          data.year = $scope.year;
          data.salary = $scope.salary;
          data.role = $scope.role;

          $scope.rowData.push({id:  $scope.id, name: $scope.name,age: $scope.age,gender: $scope.gender,year: $scope.year, salary: $scope.salary, role: $scope.role});
          $scope.gridOptions.api.setRowData($scope.rowData);

          // angular.element('#popup').modal('hide');
          // $scope('#userModal').modal('show');

      }
    
    
  };
  // angular.element('#popup').modal('hide');
  

});