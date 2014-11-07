
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

//Choose between Kids movies or Horror - are you taking a child?

 // Get temp
 var temp =49;

 //Get the water temp
 var waterTemp =80;

 //Are you taking a child?
 var child = true;


 // if else statement

 if(temp>70){
  console.log("Lets go to the beach!");

  waterTemp = prompt("What is the water temp?");


  //Test teh water temp
   if(waterTemp>75){
    console.log("Lets go swimming in the water!");

  } else {
     console.log("Lets lay out and get a tan!");
   }

 } else {
  console.log("Lets go to the movies!");

    if(child){

     childAge = prompt("How old is the child?");

     if(childAge<=6) {

      console.log("Let's see the smurf movie");

     }else {
       console.log("Lets go see Indiana Jones");
      }
     //console.log("Go see and animated feature!");

  } else {
     console.log("Bring the horror!");
  }

 }




