
 /*
Michael Giacchetta
Wacky Conditionals
WPF 1411
11-09-2014
 */

//alert("Testing 1,2,3");



//We want to figure out how many apples and pencils it takes to cover a roof with pancakes and how many pancakes it will take to do so.
 //I figured I'd take the idea of wacky and go way out there with it

var pencils = prompt("How many pencils do you have?");
 var apples = prompt("How many apples do you have");


//Now that we have how many penciles and apples we have, lets see how many pancakes are on the roof
 var pancakesOnRoof = Number(pencils) + Number(apples);
 console.log("With "+pencils+" Pencils and "+apples+" Apples, how many pancakes will you have on the roof?");

 if (pancakesOnRoof>=20 && pancakesOnRoof <=100) {
  console.log("Purple because aliens don't wear hats.");

 } else if (pancakesOnRoof>=20 && (pancakesOnRoof>100)) {
   console.log("Shfifty Fiave!");

  } else if (pancakesOnRoof<19) {
   console.log("Pink because the wacky assignment made him as mad as a hatter!");
  }

