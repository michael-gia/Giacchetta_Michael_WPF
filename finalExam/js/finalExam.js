
 /*
Michael Giacchetta
Final Exam
WPF 1411
11-19-2014
 */

//alert("Testing 1,2,3");



//original item cost (60.00)
 var itemCost =prompt("How much does Item #1 cost?");
itemCost =validateMeNum(itemCost);

 console.log(itemCost);

//The percent that the item is dicounted (40%)
 var discountperct = prompt("How much percent off was this item?");
 discountperct = validateMeNum2(discountperct);

 console.log(discountperct);

 //The variables calculating the cost after discount.

 var discount = discountperct /100 * itemCost;

 var discountPrice = itemCost /100 * itemCost;


console.log(discount);
console.log(discountPrice);




















 function validateMeWord(userPrompt) {

  while (userPrompt === "" || parseInt(userPrompt)) {

   userPrompt = prompt("Please type don't leave blank.");

  }  return userPrompt;


 }

 function validateMeNum(userPrompt) {

  while (userPrompt === "" || isNaN(userPrompt) ) {

   userPrompt = prompt("Please type in a number and don't leave blank.");

  }  return userPrompt;

 }

 function validateMeNum2(userPrompt) {

  while (userPrompt === "" || isNaN(userPrompt) || (userPrompt>=0 && userPrompt >=100) ) {

   userPrompt = prompt("Please type in a number from 0 to 100 and don't leave blank.");

  }  return userPrompt;

 }

