
 /*
Michael Giacchetta
Personal Conditionals
WPF 1411
11-09-2014
 */

//alert("Testing 1,2,3");

 // Lets go kayaking!
 // But we only have 3 kayaks

 //Is the weather nice enough to go kayaking?


 var numOfKayaks = 3;
 var weatherTemp = prompt("What is the weather temp today?");



 if (weatherTemp>=65) {
 console.log("Lets go kayaking!");

 numberOfPeople = prompt("How many people are we hanging out with today?")

  if(numberOfPeople<=numOfKayaks){
    console.log("Sweet, we have enough kayaks for everyone!");

  } else {
   console.log("We don't have enough kayaks, lets play some frisbee golf!");
  }

  //If we don't want to be outside than let grab a drink!

} else {
 console.log("Coffee shop Time!");}
 numberOfPeople = prompt("How many people are we hanging out with today?")

  //Maybe more of the group are beer people, lets ask them!

 beerorCoffee = prompt("How many people out of "+numberOfPeople+" really want coffee right now?");

 //Here is the original code before it is made into a ternary.
/*
 if (beerorCoffee < numberOfPeople / 2) {
  console.log("Lets go get some beer instead.");

 } else {
  console.log("Cool, coffee shop it is");
 }
}
*/
 //Here is the if else statment turned into ternary format
 (beerorCoffee > (numberOfPeople /2) ) ? console.log("Lets go get some beer instead!") : console.log("Just making sure we still want to do coffee.") ;