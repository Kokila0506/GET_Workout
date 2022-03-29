agGrid.initialiseAgGridWithAngular1(angular);

var module = angular.module("app", ["agGrid"]);

module.controller("Ctrl", function($scope) {
 
  
    var columnDefs = [
     
        {headerName: "Employee Id", field: "id",filter: 'agTextColumnFilter',checkboxSelection: true,editable: true,},  
        {headerName: "Employee Name", field: "name", filter: PersonFilter,editable: true, },
        {headerName: "Employee Age", field: "age",filter: 'agNumberColumnFilter',editable: true,},
        {headerName: "Employee Gender", field: "gender",filter: 'agTextColumnFilter',editable: true,cellRenderer: function(param)
          {
          if( param.value.toLowerCase()!="female" && param.value.toLowerCase()!="male" )
          {
          return '<span class="rag-blue">Others</span>';
          }
          else if( param.value.toLowerCase()=="female")
          {

            return '<span class="rag-green">Female</span>'
          }
          else{
            return '<span class="rag-amber">'+param.value.charAt(0).toUpperCase() + param.value.slice(1).toLowerCase()+'</span>' ;
          }


          
        }   
    },{headerName: "Year of Joining", field: "year",filter: YearFilter,editable: true,},
        {headerName: "Employee Salary", field: "salary",filter: 'agNumberColumnFilter',editable: true,},
        {headerName: "Employee Role", field: "role" ,filter: 'agTextColumnFilter',editable: true,}];
 
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
            width: 200,
            floatingFilter: true,
            rowStyle : {
               background: 'Red'
            }
          },
          rowSelection: 'single'
             
    };
  
        
    $scope.EditPop = function() {
   
      const selectedNodes = $scope.gridOptions.api.getSelectedNodes()
      const selectedData = selectedNodes.map( node => node.data )
      const selectedDataStringPresentation = selectedData.map( node => `${node.id} \n Name: ${node.name} \n Age: ${node.age} \n Gender: ${node.gender} \n Salary: ${node.year} \n Role: ${node.salary} \n DOB: ${node.role}`).join(', ')
     // alert(`Selected Id: ${selectedDataStringPresentation}`);
    // console.log("edit index"+index);
    //  $scope.enabledEdit[index] = true;

    if(selectedDataStringPresentation){ 
    $scope.isEditrow=true;
    $scope.popTitle="Edit Data"
    $scope.btnName="Update row";
     $scope.id = selectedData[0].id;
     $scope.name=selectedData[0].name;
     $scope.age =selectedData[0].age;
     $scope.gender =selectedData[0].gender;
     $scope.year =selectedData[0].year ;
     $scope.salary =selectedData[0].salary;
     $scope.role = selectedData[0].role; 
      // console.log(selectedData[0].id);
      // console.log(selectedData[0].name);
     
      $scope.showhideprop = true;
     }
     else{
       alert("No data Selected!!");
     }

    }
    $scope.hideDiv = function() {
      $scope.showhideprop = false;
    }

    $scope.saveData = function (index) {
     console.log("edit index"+index);
     $scope.enabledEdit[index] = true;
  };
  
    
    $scope.AddPOP = function() {
       $scope.popTitle="Add Data"
       $scope.btnName="Add row";
      $scope.isEditrow=false;
      $scope.id = "";
      $scope.name="";
      $scope.age ="";
      $scope.gender ="";
      $scope.year =""
      $scope.salary ="";
      $scope.role = "";
      $scope.showhideprop = true;      
             
    };
    
    $scope.addRow = function () {
      
      if(!$scope.isEditrow)
      {
       if ($scope.id != "" && $scope.name != "" && $scope.age != "" && $scope.gender != "" && $scope.year != "" && $scope.salary != "" && $scope.role != ""  ) {
          var data = [];
          data.id = $scope.id;
          data.name = $scope.name;
          data.age = $scope.age;
          data.gender = $scope.gender;
          data.year = $scope.year;
          data.salary = $scope.salary;
          data.role = $scope.role;

           $scope.showhideprop = false;
           const isCheckValid=0;
          angular.forEach($scope.rowData, function(value1, key1){
              if(value1.id === data.id || value1.name === data.name || value1.age === data.age || value1.gender === data.gender || value1.year === data.year || value1.salary === data.salary || value1.role === data.role){
                alert('already exist');
                isCheckValid=1;
              }  
          })
          if(isCheckValid==0){
            $scope.rowData.push({id:  $scope.id, name: $scope.name,age: $scope.age,gender: $scope.gender,year: $scope.year, salary: $scope.salary, role: $scope.role});
            $scope.gridOptions.api.setRowData($scope.rowData);
            alert('Row added sucessfully!!!');
          }                 

      }
    }

    else {
      
      const index = $scope.rowData.findIndex(emp => emp.id==$scope.id);
      $scope.rowData[index].name=$scope.name;
      $scope.rowData[index].age=$scope.age;
      if( $scope.gender != "Female" &&  $scope.gender != "Male"){
        $scope.gender = "Others";
        $scope.rowData[index].gender=$scope.gender;
      }
      else{
        $scope.rowData[index].gender=$scope.gender;
      }
      $scope.rowData[index].year=$scope.year;
      $scope.rowData[index].salary=$scope.salary;
      $scope.rowData[index].role=$scope.role;
      
      $scope.gridOptions.api.setRowData($scope.rowData);
      $scope.showhideprop = false;
    }
        
  };
       
  $scope.deleteRow= function () {
    // alert("Select a Row to Delete")
    var selected = $scope.gridOptions.api.getFocusedCell();
    $scope.gridOptions.rowData.splice(selected.rowIndex, 1);
    $scope.gridOptions.api.setRowData($scope.gridOptions.rowData)
   

    
};

});