app.service('dataService', function () {

this.UserDetails = [{
   username: "Kokila",
   password: "123",
   displayName: "Virat"
  },{
    username: "Nivetha",
    password: "456",
    displayName: "Sakthi"
   }, {
    username: "Kanaga",
    password: "789",
    displayName: "Surya"
   },{
    username: "admin",
    password: "password",
    displayName: "hari"
   }];
 
   //localStorage.setItem("dataService", JSON.stringify(this.datas));
  });
