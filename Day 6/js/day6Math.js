
 /*
Michael Giacchetta
Math
WPF 1411
11-07-2014
 */

//alert("Testing 1,2,3");

 // Normal Round
  // .5+ goes up, else goes down

 var num1 = 9.444;

 console.log(num1);
 console.log(Math.round(num1));


//Floor round
 //Always rounds down
 var num2 = 6.999;

 console.log(num2);
 console.log(Math.floor(num2));

 //Ceiling Round
 //Always rounds up!
 var num3 = 4.8;
 console.log(num3);
 console.log(Math.ceil(num3));


 //How to get a specific number of decimals
 // toFixed - not part of Math

 var num4 = 6.7893


 console.log(num4);
  console.log(num4.toFixed(2));

 //Random Numbers
 // Math.random() - gives valuse 0 and almost 1
 // Nothing goes inside of the ()

 var num5 = Math.random();
 console.log(num5);

 //Number between 0 - 10
 var num6 = Math.random() * 10;
 console.log(num6);


 //Integers between 0 - 10
 var num7 = Math.round( Math.random() * 10) ;
 console.log(num7);

 //Integers between 0 - 100

var num8 = Math.round(Math.random()* 100);
 console.log(num8);


 //Get a random integer between any 2 values
 // Math.random() * (max-min) + min

  //Random between 50 - 80

var num9 = Math.round(Math.random()*(80-50)+50);
 console.log(num9);

 
