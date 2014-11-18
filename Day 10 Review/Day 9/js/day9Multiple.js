
 /*
Michael Giacchetta
Multiple Functions
WPF 1411
11-12-2014
 */

//alert("Testing 1,2,3");

 // Figure out how much pizza cost per sq in
 //and how much per slice
 /*
 //Prompt the user for:
 Radius of Pizza
 Cost of Pizza
 # of slices of pizza
*/

 var pizzaRadious = prompt("What is the radius of your pizza?");
 var pizzaCost = prompt("How much does your pizza cost in total?");
 var pizzaSlices = prompt("How many slices are in your pizza?");

 //function call our LORD FUNCTION!!!
 var results =lordFunction(pizzaRadious, pizzaCost, pizzaSlices);

 console.log("Your pizza costs $"+results[0]+" per square inch or $"+results[1]+" per slice.");



 //Create a function to start all other functions
 function lordFunction(radius, cost, slices){
    //function call the other 3 functions, then return the values
    var area =pizzaArea(radius);
    var areaCost =pizzaSqInCost(area, cost);
    var slicePrice =pricePerSlice(slices, cost);

     return [areaCost, slicePrice];

 }































 //Function that calculates the area of the pizza
 //Funtion that calulates the price per sq in
 //Function that calculates the price per slice





 function pizzaArea(r){

   var area = r*r*Math.PI;
   return area;

 }


 function pizzaSqInCost(area, price){

  var costPerIn = price/area;

  //round to 2 decimals
  costPerIn =costPerIn.toFixed(2);
  return costPerIn;

 }

 function pricePerSlice(slices, price){
   var costPerSlice =price/slices;
   //round to 2 decimals
  costPerSlice =costPerSlice.toFixed(2);
  return costPerSlice;


 }