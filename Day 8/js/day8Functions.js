
 /*
Michael Giacchetta
Functions
WPF 1411
11-12-2014
 */

//alert("Testing 1,2,3");


 //Function call for calcArea

 calcArea();

 //Create a function - console.log hello

 //function functionname(){}

 function printHello(){
    //Inside of the function
    console.log("Hello!");
  printMore();


 }

 //Create a 2nd function that prints more
 function printMore(){
    console.log("Prints out more text!");

 }

 //function call - "go" button f the factory
 // functionName();

 printHello();

 printHello();


 printMore();


 //Create a function that will calc the area of a rectangle

 function calcArea(){
    //Create Variables for width, height, and area
  var width =20;
  var height =30;
  var area =width*height;

  //Print the area
  console.log("Your rectangle has an area of "+area);



 }