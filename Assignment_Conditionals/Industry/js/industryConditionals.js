
 /*
Michael Giacchetta
Industry Conditionals
WPF 1411
11-09-2014
 */

//alert("Testing 1,2,3");

// Car rental
 //Lets say a business is sending a manager on a business trip.
 //We can calculate out the cost and reimbursement

var travelDistance = prompt("How many miles will you be traveling");
var budget = 200;
var costPerMile = .55;
 var milageCost = costPerMile * travelDistance;

 if (milageCost<=budget){
   console.log("Lets get to traveling!");


 } else {
  console.log("You can't afford to go that far.");
 }





