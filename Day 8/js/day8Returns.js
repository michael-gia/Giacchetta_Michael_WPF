
 /*
Michael Giacchetta
Returns
WPF 1411
11-12-2014
 */

//alert("Testing 1,2,3");

 //Returning values from a function
 //Or how do we get stuff out of "Vegas"

 //Create a function

   function calcArea(wid,len){

      var area =wid*len;

    console.log("The area inside of the function is "+area);


     //Return the area variable to the main code
    return area;
   }

 //function call
 //Catch the returned value with a variable
 var returnedArea = calcArea(30,20)

 console.log(returnedArea);



//Prompt the user
 var width = prompt("Please enter a width:");

 //Validate the prompt
 while(width==="" || isNaN(width)){

  width = prompt("Please on type in numbers and don't leave blank.\nEnter width:");


 }

 var length = prompt("Please enter a length:");
 length =validateMe(length);

 var userRactArea = calcArea(width,length);

 var userRectPeri = periRect(width, length);

 console.log("The area of a rectangle with a width of "+width+" and a length of "+length+" is "+userRactArea+".\nThe perimeter is "+userRectPeri);






 //Create a function to find perimeter of a rectangle
 function periRect(wid,len){

  var perimeter = wid*2 + len*2;

  //Return the perimeter
  return perimeter;

 }

 //Creating a validation function

 function validateMe(userPrompt){

  while(userPrompt==="" || isNaN(userPrompt)){

   //Reprompt the user
   userPrompt = prompt("Please type in only numbers and don't leave blank.");


  }
  return userPrompt;


 }

