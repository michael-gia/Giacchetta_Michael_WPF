
 /*
Michael Giacchetta
Logical Operators
WPF 1411
11-05-2014
 */

//alert("Testing 1,2,3");

 //Buying an iPad
 //If the price is less than or equal to our budget OR paycheck is over $1000
 //Then we can buy the iPad

 var budget = 300;
 var iPadPrice = 500;
 var payCheck = 1200;

 //&& and logical operator
 //The iPad must be BOTH these things
 if(iPadPrice<=budget && payCheck > 1000){
  console.log("iPad is within budget and your check is over $1000");

 } else {
  console.log("Can't buy the iPad");
 }

 // || - or logical operator
 // We can buy if one of the conditions is met

 if (iPadPrice<=budget || payCheck>1000){
  console.log("You can buy the iPad!");

 } else {
  console.log("You can't buy the iPad.");
 }

 //&& and logical operator
 //The iPad must be BOTH these things
 //OR I win the lottery
 var wonLotery = true;
 if((iPadPrice<=budget && payCheck > 1000)|| wonLotery){
  console.log("iPad is within budget and your check is over $1000");

 } else {
  console.log("Can't buy the iPad");
 }