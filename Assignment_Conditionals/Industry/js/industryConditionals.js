
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
var budget = 600;
var costPerMile = .55;
 var milageCost = costPerMile * travelDistance;
 var remainingBudget = budget-milageCost;

 console.log(milageCost);

 if (milageCost<=budget && travelDistance>800){
   console.log("Lets start the trip, but we are going pretty far.");
    var lodgingCost = prompt("How much is a Motel going to cost for a night?");
     


 } else if(milageCost<=budget && travelDistance<800) {
   console.log("Enjoy your trip!");

 } else {
  console.log("You can't afford to travel that far, I guess you have to fly!");
 }





