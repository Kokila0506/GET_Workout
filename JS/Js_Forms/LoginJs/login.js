
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "admin" && password == "password"){
alert ("Login successfully");
return false;
}
else{
    alert("Fill below Required Column!!!");
 }
}