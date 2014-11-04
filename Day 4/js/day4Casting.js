
 /*
Michael Giacchetta
Day 4 Casting
WPF 1411
11-03-2014
 */

//alert("Testing 1,2,3");

//Casting variables - treat one variable type as another

 var stringVar = "6";
 var results = 7+stringVar;
 console.log(results);

 //To Cast a variable as a number
 //Number() - anything inside of the () is treater as a number - if it makes sense

 var castingResults = 7 + Number(stringVar);
 console.log(castingResults);

 //Casting numbers as a string
 //String() - treats anything inside as a text string

 //Phone number
 var areaCode = 407;
 var firstPart = 867;
 var secondPart = 5309;

 //Concatinate the phone number to one variable

 var phoneNumber = String(areaCode) + String(firstPart) + String(secondPart);
 console.log(phoneNumber);

 var phoneNumber2 = "("+areaCode+")"+firstPart+"-"+secondPart;
 console.log(phoneNumber2);

 // 7 cats
 //Parsing Integer
 //ParsInt() - looks through the text string and returns the integer in it

 //Only the first number is returned
 //the number has to be the first thing in the text string
 //If parseInt cant find it - returns NaN
 //NaN - Not a Number

 var a = parseInt("40 Years 7 years ago");
 console.log(a);

 var b= parseInt("I am 40 years old");
 console.log(b);

 //Prompt() - ONLY returns text strings!!!

 var cupsHad = prompt("How many cups do you have?");
 var cupsBought = prompt("How many cups are going to buy?");

 //Add the number of cups I had plus that I am buying

var totalCups = Number(cupsHad) + parseInt(cupsBought);
console.log(totalCups);