
 /*
Michael Giacchetta
Arguments
WPF 1411
11-12-2014
 */

//alert("Testing 1,2,3");


 //Argument - Goes in to the function - Part of the function call
 //Paramenter - catches the argument and is used inside of the function

 // Create function that calculates the area of a rectangle

 function calcArea(w,h){ //Parameters go here

  //Hardcoded values for width and height -NOT GOOD!!
   //var width=10;
   //var height=20;
   //var area =width*height;
   var area = w * h;

  console.log("The area of your rectangle is "+area);

 }

 //Fucntion Call
 calcArea(4,5);//Arguments go here

 calcArea(2,3);

 var width = prompt("Width:");
 var height = prompt("Length:");

 calcArea(width,height);

 //Calculate dog years

 //dog years = human years *7

 function dogYears(humanAge){


//DO NOT DO THIS
   //var dogAge =yourAge*7
  var dogAge =humanAge * 7;
  console.log("You are "+dogAge+" years old in dog years!");



 }


//Function Call

 dogYears(36);
 dogYears(18);

 var yourAge = prompt("Please type in your age:");
 dogYears(yourAge);

 var fredsAge = prompt("How old is your friend Fred?");
  dogYears(fredsAge);


