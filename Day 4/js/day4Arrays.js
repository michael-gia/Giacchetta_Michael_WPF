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


