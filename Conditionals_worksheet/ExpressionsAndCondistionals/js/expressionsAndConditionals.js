
 /*
Michael Giacchetta
Expressions & Conditionals
WPF 1411
11-05-2014
 */

//alert("Testing 1,2,3");


//Group1: Expressions & Conditionals

 var gasEfficency = 32
 var tankGuageReading = .25
 var gasCapacity = 16
 var distanceRemaining = 200


 var gallonsRemaining =  gasCapacity * tankGuageReading;
 var remainingTankDistance = gallonsRemaining * gasEfficency;
 //128 miles left


 (distanceRemaining>=remainingTankDistance) ? console.log("Yes, you can make it without stopping for gas!")
     : console.log("You only have "+gallonsRemaining+" gallons of gas in your tank, better get gas now while you can!");

