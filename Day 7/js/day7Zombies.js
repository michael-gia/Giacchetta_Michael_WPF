
 /*
Michael Giacchetta
Zombies
WPF 1411
11-10-2014
 */

//alert("Testing 1,2,3");

 //Zombie Attack!!!
 //We have a zombie at the school.
 //It can bite 4 people a day and turn them into zombies by the next day.
 //The CDC has asked us, how many zombies will there be in 8 days?

 //Setup variables

 var numZombies = 1; //How many zombies do we have

 var numBites = 4; //Number of bites, per zombie, per day

 var days =8; //Number of days




 //Every day zombies will bite 4 people and turn them into zombies

 //Loop number of days

 for(var i=1; i<=days; i++){

  //How many new zombies get made and when do they go bite people.
  var newZombies =numZombies*numBites;

  //The bitten people now become zombies
  numZombies= numZombies+newZombies; //numZombies += newZombies;

  console.log("There are now "+numZombies+" zombies on day #"+i+"!");

  if(numZombies>=1000000){
   break;
  }

 }


