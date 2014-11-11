
 /*
Michael Giacchetta
Validating Prompts
WPF 1411
11-10-2014
 */

//alert("Testing 1,2,3");


 //Min Max number - find a random inbetween

 //Math.round(Math.random()*(max-min)+min)

 //Askf or a minimum variable

 var min = prompt("Lets find a random number, what is the minimum");

 //Test if the user skips the prompt - they just press enter
 /*
 if(min ===""){
    //The user just pressed enter
    //Reprompt the user
  min = prompt("What is the minimum value? \nPlease do not leave blank.");

 }
*/

 //Validating uses While Loops
 //Because we don't know what the user will do

 while(min===""){
  //As long as the user skips it, reprompt
  min = prompt("What is the minimum value? \nPlease do not leave blank.");

 }

 //Validate the user information

 //Function that check the type of a variable
 //isNaN(variable to check)

 console.log(isNaN(7)); //Returns false
   console.log(isNaN("Cat")); //Returns true

 while(isNaN(min)){
   //Loops as long as it is not a number
  //Reprompt the user

  min=prompt("Please only type in numbers!\nWhat is the minimum value:");

 }

 //combie both tests together
 while(min==="" || isNaN(min)){

  //reprompt the user

  if(min==="") {
   min = prompt("Please do not leave blank.\nWhat is the minimum value?");

  } else{

   min=prompt("Please only enter a number!\nWhat is the minimum value?");

  }


 }


 //Prompt and validate at the same time

 do{
  var max=prompt("Please only type in numbers and don't leave blank.\nWhat is the max value?");

 }while(max==="" || isNaN(max));

 //validate if the user types in EXACTLY what you want

 var question = prompt("Please type in Yes or No");

 while(question!="Yes" && question!="yes" && question!="No" && question!="no"){

  //Reprompt the user

  question =prompt("Please type ONLY Yes or No!");



 }
