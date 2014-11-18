/**
 * Created by michaelgiacchetta on 11/3/14.
 */

//confirm ("Testing to see if my indext is linked.")

/*
Michael Giacchetta
Day 4 Arrays
WPF 1411
11-03-2014
 */

//Start a basic array

var avengersNames = ["Hulk","Spiderman", "Iron Man"];
console.log(avengersNames);

//Access a specific avenger in our array
console.log(avengersNames[1]);


//We can use a variable to represent our index number as well.
var num = 2;

//Lets print iron man's name
console.log(avengersNames[num]);



//Add an avenger to our array
avengersNames[3] = "Thor";
console.log(avengersNames);

//Figure out the length of the array
// .length property
//Dot syntax - put a period in it.

console.log(avengersNames.length);

//add another avenger
avengersNames[avengersNames.length] = "Captian America";
console.log(avengersNames);

//Add Black Widow to the mix
avengersNames[avengersNames.length] = "Black Widow";

//access the last avenger in the array
console.log(avengersNames[avengersNames.length -1]);


//New method specific to arrays called push
//it adds whatever we put in automatically to the end of our array.
avengersNames.push("Hawkeye");
console.log(avengersNames);

//pop() - method of an array that removes the last item in the array
//You can save the popped variable (if you want to!)
//Set a variable equal to that pop method
var soloAvenger = avengersNames.pop();
console.log(avengersNames);
console.log(soloAvenger);


//Pick oranges ever day
//Track how many oranges are picked in each day
var orangeBins =[234, 473, 20, 709];

//How many oranges were picked in total
//Store that in a variable
var orangeTotal = orangeBins[0] +orangeBins[1] +orangeBins[2] +orangeBins[3];
console.log(orangeTotal+" is the total number oranges picked.");

//What is the average oranges picked?
var orangeAverage = orangeTotal/orangeBins.length;
console.log("The average amount of oranges picked in "+orangeBins.length+" days is "+orangeAverage+".");



