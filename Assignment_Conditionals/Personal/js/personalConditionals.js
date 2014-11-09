
 /*
Michael Giacchetta
Personal Conditionals
WPF 1411
11-09-2014
 */

//alert("Testing 1,2,3");

 // Lets go kayaking!
 // But we only have 3 kayaks


 var numOfKayaks = 3;
 var weatherTemp = prompt("What is the weather tempature today?");

 //Is the weather nice enough to go kayaking?



if (weatherTemp>=65) {
 console.log("Lets go kayaking!");

 numberOfPeople = prompt("How many people are we hanging out with today?")

  if(numberOfPeople<=numOfKayaks){
    console.log("Sweet, we have enough kayaks for everyone!");
  } else {
   console.log("We don't have enough kayaks, lets play some frisbee golf!");
  }

} else {
 console.log("Coffee shop Time!");

 numberOfPeople = prompt("How many people are we hanging out with today?")
 beerorCoffee = prompt("How many people really want coffee right now?");


 if (beerorCoffee < numberOfPeople / 2) {
  console.log("Lets go get some beer instead.");

 } else {
  console.log("Cool, coffee shop it is");
 }
}
