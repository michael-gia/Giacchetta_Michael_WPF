
 /*
Michael Giacchetta
Industry Conditionals
WPF 1411
11-09-2014
 */

//alert("Testing 1,2,3");

// Car rental
 //Lets say a business is sending a manager on a business trip.
 //We can calculate out the cost


//When imputing Miles, try thr variables 500 for a low milage outcome and 1000 or more for a high outcome. (But any number will work)
var travelDistance = prompt("How many miles will you be traveling");
var budget = 600;
var costPerMile = .55;
 var milageCost = costPerMile * travelDistance;
 var remainingBudget = budget-milageCost;

 console.log(milageCost); //For the sake of seeing what mile count comes out it in cash with the .55 per mile I added this console log.

//This if statment is taking into account how many miles will be traveled and if the budget allows for that. If we are going far, we must account for overnight stays.
 if (milageCost<=budget && travelDistance>800){
   console.log("Lets start the trip, but "+travelDistance+" pretty far.");
  //I'm betting that a trip over 800 miles is going to take a while So I am calculating in lodging costs.
    var lodgingCost = prompt("How much is a Motel going to cost for a night?");

     if((remainingBudget-lodgingCost) <= 0){
       console.log("We can't afford a motel that costs "+lodgingCost+", lets find something cheaper or consider sleeping in the car.");
     }

//this else if is the outcome if the trip is not that far and we can afford it.
 } else if(milageCost<=budget && travelDistance<800) {
   console.log("Enjoy your trip!");
//this else is the outcome of the travel being so for that it outright does not fit the budget.
 } else {
  console.log("You can't afford to travel that far, I guess you have to fly!");
 }





