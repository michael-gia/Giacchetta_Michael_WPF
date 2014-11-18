
 /*
Michael Giacchetta
Bottle of Beer
WPF 1411
11-10-2014
 */

//alert("Testing 1,2,3");

 //Console.log the whole song of 99 Bottles of Beer on the wall.

 //Setup loop
 // for(intialize variable; condition; increment of change ){}

 for(var i=99; i>0; i--) {


//Add and if statment testing for last case

  if(i===1) {
   console.log(i + " bottle of beer on the wall. " + i + " bottle of beer. ");
   console.log("You take one down, you pass it around. No more bottles of beer on the wall.");

  }else if (i === 2) {
    console.log(i + " bottles of beer on the wall. " + i + " bottles of beer. ");
    console.log("You take one down, you pass it around. " + (i - 1) + " bottle of beer on the wall.");

   }

  else {
   console.log(i + " bottles of beer on the wall. " + i + " bottles of beer. ");
   console.log("You take one down, you pass it around. "+(i-1)+" bottles of beer on the wall.");
  }

 }

