
 /*
Michael Giacchetta
Functions Personal
WPF 1411
11-14-2014
 */


//alert("Testing 1,2,3");

 //Balancing monthly income

 var monthlyIncome = prompt("How much money do you make each month?");
 //For the sake of time I hardcoded the variables
 //Change to prompts and this will calculate you monthly expenses
 var rent =900;
 var phone =100;
 var food =300;
 var car =150;
 var internet =85;
 var entertainment =80;
 //Total hard-coded bills = 1615


//anonymous function
 var expenses = function (bill1,bill2,bill3,bill4,bill5,bill6){

  var budget = (bill1+bill2+bill3+bill4+bill5+bill6);
  return budget;
 }




 var fullBudget =expenses(rent,phone,food,car,internet,entertainment);

//hashtag Ternary
 (monthlyIncome>=fullBudget) ? ("Good job, you did not go negative this month!") : ("You might want to either cut back on some spending or start making more money!");




 






















