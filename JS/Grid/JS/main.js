agGrid.initialiseAgGridWithAngular1(angular);

var module = angular.module("app", ["agGrid"]);

module.controller("Ctrl", function($scope) {

    var columnDefs = [
    
        {headerName: "Employee Id", field: "id",sortable:true},     
        {headerName: "Employee Name", field: "name",sortable:true},
        {headerName: "Employee Age", field: "age",sortable:true},
        {headerName: "Employee Gender", field: "gender",filter:true},
        {headerName: "Employee Salary", field: "salary",sortable:true},
        {headerName: "Employee Role", field: "role",filter:true}

    ];
 
    var rowData = [
        {id: "3001", name: "Kokila",age:20,gender:"Female",salary: 25000, role:"Developer"},
        {id: "3002", name: "Hari",age:22,gender:"Male", salary: 27000, role:"Testing"},
        {id: "3003", name: "Maha",age:23,gender:"Female", salary: 28000, role:"Data Analytics"},
        {id: "3004", name: "Darshini",age:25,gender:"Female", salary: 39000, role:"Testing"},
        {id: "3005", name: "Naveen",age:21,dgender:"Male", salary: 20000, role:"Developer"},
        {id: "3006", name: "Jeeva",age:22,gender:"Male", salary: 39000, role:"Engineer"},
        {id: "3007", name: "Riya",age:30,gender:"Female", salary: 39000, role:"Manager"}
     ];
     
    $scope.gridOptions = {
        columnDefs: columnDefs,
        rowData: rowData, 
    
    };
   
});