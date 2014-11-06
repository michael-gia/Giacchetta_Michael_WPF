
 /*
Michael Giacchetta
Steak Temperature Check
WPF 1411
11-05-2014
 */

//alert("Testing 1,2,3");

 // Ask for steak temperature and tell what steak pereferance it is

 /*
  Extra-rare 115–120 °F
  Rare 125–130 °F
  Medium rare 130–140 °F
  Medium 140–150 °F	145 °F and rest for at least 3 minutes
  Medium well150–155 °F
  Well done	160 °F+
  */

//Declare and define the variable for steak temp

 var steakTemp =prompt("What temperature is your steak?");

 if(steakTemp<115){
  console.log("Uncooked Meat - Moooo");



 } else if (steakTemp<=120){
  console.log("Your steak is Extra-Rare");

 } else if(steakTemp<=130){
  console.log("Your steak is Rare");

 } else if (steakTemp<=140){
  console.log("Your steak is Medium-Rare");

 } else if (steakTemp<=150){
  console.log("Your steak is Medium");

 } else if (steakTemp<=155){
  console.log("Your steak is Medium-Well");

 } else if (steakTemp<=160){
  console.log("Your steak Well Done");

 } else {
  console.log("You burnt your steak. Hope you like it crispy.");
 }


