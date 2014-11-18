
 /*
Michael Giacchetta
Looping Arrays
WPF 1411
11-12-2014
 */

//alert("Testing 1,2,3");

 //Looping over arrays

//for(var i=0; i<arrayName.length; i++){}

 //Create an Array
 var names = ["Scooby", "Shaggy", "Fred", "Velma", "Daphne", "Scrappy-Doo"];

 //Tell each one of them that they colved the case

 for(var i=0; i<names.length; i++){

    console.log("You solved the case "+names[i]+"!");


 }

 //Create an array of bills to pay

 var bills = [50, 10, 5, 20, 10];

 //Let's add up our bills
 //Create a totale bills variable outside and above our loop

 var totalBills =0;
 for(var j =0; j<bills.length; j++){

  //Add each idividual to teh total bills
  //totalBills += bills[j]; //= totalBills+bills[j]
  //Only care about bills that are $20 and higher

  if(bills[j] >=20){
    //if this is true, add that bill to the total
    totalBills+=bills[j];

  }


 }

 console.log("Your total bills are "+totalBills);
