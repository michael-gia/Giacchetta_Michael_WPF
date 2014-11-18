
 /*
Michael Giacchetta
Scope
WPF 1411
11-12-2014
 */

//alert("Testing 1,2,3");

 //Variable Scope
  // Variable inside and outside of a function


 //We try to not use the same names for variables....BUT
 //In large files, this is going to be impossible.

 //When you create a variable inside of a function, it only exists inside of that one function.


 //Create a variable for width (Main code)
var width =5; ////Scoped outside of the function or scoped to main code
 console.log("Starting width in main code is "+width);


//Create a function that calculates the perimeter of a rectangle

 function calcPeri(){
  console.log("In function before declaration "+width);

    var width =10; //scoped to the function calcPeri
  console.log("Inside of the function, the width is "+width);
    var height =20;
    var perimeter = width*2 +height*2;

   console.log("Inside of function, the perimeter is "+perimeter);



 }
 console.log("Before function call "+width);
 calcPeri();
 console.log("After the function call "+width);

