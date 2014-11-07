
 /*
Michael Giacchetta
Day 6 Nesting Ifs
WPF 1411
11-07-2014
 */

//alert("Testing 1,2,3");


 //Some decisions depend on other decisions

 //If it is warm enough, lets go to the beach, if not lets go to the movies.
 //If the water is warm enough, lets go swimming, if not lets just lay out and get a tan.



 // Get temp
 var temp =69;

 //Get the water temp
 var waterTemp =60;


 // if else statement

 if(temp>70){
  console.log("Lets go to the beach!");

 } else {
  console.log("Lets go to the movies!");

 }


 //Test teh water temp
 if(waterTemp>75){
  console.log("Lets go swimming in the water!");

 } else{
  console.log("Lets lay out and get a tan!");

 }

