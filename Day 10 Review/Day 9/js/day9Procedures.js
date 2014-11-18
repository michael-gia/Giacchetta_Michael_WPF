
 /*
Michael Giacchetta
Procedures
WPF 1411
11-14-2014
 */

//alert("Testing 1,2,3");

 //A basic function
 function calcArea(width, height){
  var area = width * height;

  return area;


 }


//Function Call
 var returnedArea = calcArea(6,7);
  console.log(returnedArea);


 //Procedure - console.log the perimeter

 function calcPeri(width, height){

     var peri =width*2 + height*2;
  //console.log the peri inside of the procedure
    console.log(peri);
   //Does NOT return a value

 }

 //Function call for this procedure
 //Do not catch with a variable
 calcPeri(6,7);

