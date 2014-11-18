/*
Michael Giacchetta
Day 4 Prompts
WPF 1411
11-03-2014
 */

//alert("Testing 1,2,3");

// Ask user for input

//prompt() - asks the user to type something in
var yearBorn = prompt("Enter your year of birth:");
console.log(yearBorn);

//Figure out how old we are
var age = 2014 - yearBorn;
console.log("You are "+age+" years old.");



//Calculate the area of a rectangle
//area= legnth * width

var length = prompt(" We are going to calculate the area of a rectangle.\n Please enter the length of your rectangle:");
var width = prompt ("Please enter the width of your rectangle:")

//calculate the actual area
var area = length * width;

//Create a result variable and then console log that
var results = "When your rectangle has the length of "+length+" and the width of "+width+" has an area of "+area+".";

console.log(results)
alert(results)

//console the area
//console.log("The area of your rectangle is "+area+".");
console.log("When your rectangle has the length of "+length+" and the width of "+width+" has an area of "+area+".")

//alert the user with the same information
alert("When your rectangle has the length of "+length+" and the width of "+width+" has an area of "+area+".")


