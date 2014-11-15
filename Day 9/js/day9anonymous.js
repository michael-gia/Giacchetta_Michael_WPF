
 /*
Michael Giacchetta
Anonymous Functions
WPF 1411
11-14-2014
 */

//alert("Testing 1,2,3");




 //Function Call - For normal Function
 var returnedArea =triangleArea(6,8);
 console.log("Returned area for normal function "+returnedArea);

 /*
 Basic function
 function fuctionName(){
     //code goes here
 }



 Anon Function
 var functionName = function (){
   //code goes here
 };




  */



//A normal function to find the area of a triangle
 function triangleArea(base, height){

     var area = .5 *base *height;
     return area;

 }

 //Function Call - For normal Function
 var returnedArea =triangleArea(4,5);
 console.log("Returned area for normal function "+returnedArea);



 //Anonymous Function that calculates triangle area

 var anonTriArea = function(base, height){
     var area =.5 *base *height;
     return area;

 };

 //Function call for a anon function

 var returnedAnonArea =anonTriArea(2,3);

 console.log("The returned area from the anon function is "+returnedAnonArea);





