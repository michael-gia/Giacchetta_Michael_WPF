
 /*
Michael Giacchetta
Wacky Conditionals
WPF 1411
11-09-2014
 */

//alert("Testing 1,2,3");


var pencils = prompt("How many pencils do you have?");
 var apples = prompt("How many apples do you have");

 var pancakesOnRoof = pencils + apples;

 console.log("With "+pencils+" Pencils and "+apples+" Apples, how many pancakes will you have on the roof?");

 if (pancakesOnRoof>=20 && pancakesOnRoof <=100) {
  console.log("Purple because aliens don't wear hats.");

 } else if (pancakesOnRoof>20 && pancakesOnRoof>100) {
   console.log("Shfifty Fiave!");

  } else {
   console.log("Pink because the wacky assignment made him as mad as a hatter!");
  }

