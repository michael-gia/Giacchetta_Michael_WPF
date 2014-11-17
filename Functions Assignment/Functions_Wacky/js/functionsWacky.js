
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

 var player1 =Math.random() *75;
 var player2 =Math.random() *75;

   console.log(player1);
   console.log(player2);




//Here is the function that will be used for each player.
function rockPaperScissors (r,p,s) {


 if (player1 <= 25) {
  console.log("You got Rock");

 } else if (player1 > 25 && player1 <= 50) {
  console.log("You got Paper");

 } else if (player1 > 50 && player1 <= 75) {
  console.log("You got Scissors");
 }

}







