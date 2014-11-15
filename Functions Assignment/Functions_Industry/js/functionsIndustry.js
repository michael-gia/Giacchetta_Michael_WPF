
 /*
Michael Giacchetta
Functions Industry
WPF 1411
11-14-2014
 */

//alert("Testing 1,2,3");

//Trying to calculate how many tiles we will need to resurface the kitchen floor.
 // How much will it cost to get the tiles.


//Here are the variables we will prompt the user for
 var floorArea =prompt("How many square feet is the kitchen?");
 var tileSpec = 2; //Square feet
 var costPerTile =prompt("How much does each time cost?");

//Here is the funcation call and variable that uses the function
 tileAmount()
var results =tileAmount(floorArea,tileSpec,costPerTile);

 console.log("While redoing your kitchen floor that is "+floorArea+" Sq feet, you will need "+(floorArea/tileSpec)+" tiles.\nIf the cost per tile is "+costPerTile+" your total cost will be "+results.toFixed(2)+".");















 function tileAmount(area,tilespec,cost){

    var howMany = area/tilespec;
    var totalCost = howMany*cost;
     return totalCost;

 }

