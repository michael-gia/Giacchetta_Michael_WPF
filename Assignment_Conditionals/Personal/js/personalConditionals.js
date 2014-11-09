
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



if (weatherTemp>=80) {
 console.log("Lets go kayaking!");

 numberOfPeople = prompt("How many people are we hanging out with today?")

  if(numberOfPeople<=numOfKayaks){
    console.log("Sweet, we have enough kayaks for everyone!");
  } else {
   console.log("We don't have enough kayaks, Lets go the a coffee shop.");
  }

} else {
   console.log("Coffee Time!");
}
