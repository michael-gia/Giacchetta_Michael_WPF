
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
 var weatherTemp = 75;

 //Is the weather nice enough to go kayaking?

if (weatherTemp>=65){
   console.log("It's nice enough to go kayacking!");
  numOfPeople = prompt("How many people are we hanging out with today?");
   if (numOfPeople>numOfKayaks){
     console.log("Sorry we don't have enough kayaks.");
   }

} else {
   console.log("Lets hang out at a coffee shop");
}

