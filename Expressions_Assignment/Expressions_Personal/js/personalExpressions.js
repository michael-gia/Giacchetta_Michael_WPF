
 /*
Michael Giacchetta
Personal Expressions
WPF 1411
11-03-2014
 */

//alert("Testing 1,2,3");

//Lets calculate how many Kurieg K-cups a person used in a month and determine how many more we need to buy.
//I will start by prompting the person with how many k-cup he/she uses for each week of the month.


 var kCupBoxs =prompt("How many boxes of k-cups did you buy at the beginning of the month?");

 var kCupsbought =kCupBoxs*12;



 var week1 =prompt("How many k-cups did you use in the first week of the month?");
 var week2 =prompt("How many k-cups did you use in the second week of the month?");
 var week3 =prompt("How many k-cups did you use in the third week of the month?");
 var week4 =prompt("How many k-cups did you use in the fourth week of the month?");


 var totalCupsUsed = parseInt(week1)+parseInt(week2)+parseInt(week3)+parseInt(week4);

 console.log("From the "+kCupBoxs+" boxes of k-cups you bought at the beginning of the month, You used "+totalCupsUsed+" k-cups.");
 var cupsLeftOver = kCupsbought - totalCupsUsed;
 console.log("This leaves you with "+cupsLeftOver+" k-cups at the end of the month.");



