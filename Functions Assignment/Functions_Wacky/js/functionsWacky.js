
 /*
Michael Giacchetta
Title
WPF 1411
11-03-2014
 */

//alert("Testing 1,2,3");



//Rock, paper, scissors.

 //0 - 25 is Rock
 //26 - 50 is Paper
 // 51 - 75 is Scissors


//Here are the amount of players

 var name = prompt("What is your name?");
 name =validateMeWord(name);
 console.log("Hello "+name+", you are player number 1.");

 var player1 =Math.random() *75;
 var player2 =Math.random() *75;

   //console.log(player1);
   //console.log(player2);

rps();
 rps2();
var playerOutcom = rps(player1);















//Here is the function that will be used for each player.
function rps (p1) {


 if (p1 <= 25) {
  console.log("Rock");

 } else if (p1 > 25 && p1 <= 50) {
  console.log("Paper");

 } else if (p1 > 50 && p1 <= 75) {
  console.log("Scissors");
 }
 return p1;

}



 function rps2 (p2) {


  if (p2 <= 25) {
   console.log("You got Rock");

  } else if (p2 > 25 && p1 <= 50) {
   console.log("You got Paper");

  } else if (p2 > 50 && p1 <= 75) {
   console.log("You got Scissors");
  }
  return p2;

 }

 function validateMeWord(userPrompt) {

  while (userPrompt === "" || Number(userPrompt) || parseInt(userPrompt)) {

   userPrompt = prompt("Please type in your name and don't leave blank.");

  }  return userPrompt;

 }





