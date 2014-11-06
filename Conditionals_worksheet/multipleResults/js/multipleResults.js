
 /*
Michael Giacchetta
Multiple Results
WPF 1411
11-05-2014
 */

//alert("Testing 1,2,3");

 var username = prompt("Please Select Username");
 var password = prompt("Please Select Password");
 var correctName = "hodor";
 var correctPass = "8675309";

if (username==correctName && password==correctPass) {
 console.log("Welcome");

} else if (!(username==correctName)){
  console.log("User not found. Try again");

 } else if (!(password==correctPass)){
 console.log("Password does not match our records");

}





