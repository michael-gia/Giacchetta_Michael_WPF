
 /*
Michael Giacchetta
Functions
WPF 1411
11-12-2014
 */

//alert("Testing 1,2,3");


 var radius = prompt("Please type in the radius of the circle?");
 radius = validateMe(radius);


 var circumference = calcCircum(radius);
 console.log("The Circumference of the circle is " +Math.round(circumference)+".");

 //Here are the variables for bees stings

 var victimWeight =prompt("What is the weight of the animal?");
 victimWeight = validateMe(victimWeight);

 var stingsToKill =beeStings(victimWeight)


 console.log("It takes "+Math.round(stingsToKill)+" bee stings to kill this animal.");














function beeStings(weight){

 var numberOfStings = weight *8.666666667;
 return numberOfStings;

}


 function calcCircum(r) {

  var circumference = 2*Math.PI*r;
  return circumference;
 }


 function validateMe(userPrompt){
  while(userPrompt==="" || isNaN(userPrompt)) {
   userPrompt = prompt("Please type in only numbers and don't leave blank.");
  } return userPrompt;
  }