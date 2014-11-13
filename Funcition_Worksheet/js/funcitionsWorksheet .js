
 /*
Michael Giacchetta
Functions
WPF 1411
11-12-2014
 */

//alert("Testing 1,2,3");

 var width = 5;
 var height = 6;

 var radius = prompt("Please type in the radius of the circle?");
 radius = validateMe(radius);




 var circumference = calcCircum(radius);
 console.log("The Circumference of the circle is " +Math.round(circumference)+".");
 














 function calcCircum(r) {

  var circumference = 2*Math.PI*r;
  return circumference;
 }



 function validateMe(userPrompt){

  while(userPrompt==="" || isNaN(userPrompt)){

   userPrompt = prompt("Please type in only numbers and don't leave blank.");
  } return userPrompt;
  }