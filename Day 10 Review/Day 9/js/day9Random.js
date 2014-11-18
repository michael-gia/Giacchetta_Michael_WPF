
 /*
Michael Giacchetta
Random
WPF 1411
11-14-2014
 */

//alert("Testing 1,2,3");

 //Creat a normal or basic function that iwll take in a
 //min and max number and return a random integer between them.

//Normal or basic RETURNS a value

 //Ask the user for a min and ma variable

 var shouldRun = true;

 var min =parseInt(prompt("Let's find a random number between two values\nWhat is the starting or min number:"));
 //Validate the users response
 while(min==="" || isNaN(min)){
      //Reprompt the user for a valid response
      min =prompt("Please do not leave blank and only use numbers.\nWhat's the minimum value:");
 }

 var max =parseInt(prompt("What is the larger value or the max:"));

 while(max==="" || isNaN(max) || min>=max){
  //Reprompt the user for a valid response
    if(max===""){
      //User left blank
     max=prompt("Please don't leave this blank.\nWhat is the max value:");

    } else if(isNaN(max)){
        max=prompt("Please only type in numbers.\nWhat is the max number:");
    } else if(min>=max){
      max=prompt("Please type in a number larger than the min value.\nWhat is the max value:");
    }


 }
 if(shouldRun) {


     //Function call
     var returnedNumber = randomizer(min, max);

     console.log("Your random interger between " + min + " and " + max + " is " + returnedNumber + ".");
 }

//Create an array to catch teh returned integers
 var numbers =[];

 //Create a for loop and console.log 15 random integer


 for(var i=0; i<15; i++){
     numbers.push(randomizer(min,max));
     console.log(numbers[i]);

 }

 console.log(numbers);

















 //Create a random number generating function

 function randomizer(mn,mx){

  //Create the variable to hold the random number
  //Math.random() * (max-min) + min;
  var randomNumber = Math.round(Math.random() * (mx-mn) + Number(mn));


  //Return the random number back tot he code
  return randomNumber;
 }