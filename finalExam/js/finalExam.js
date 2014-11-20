
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


//The percent that the item is dicounted (40%)
 var discountperct = prompt("How much percent off was this item?");
 discountperct = validateMeNum2(discountperct);


 //The variables calculating the cost after discount.

 var discount = discountperct /100 * itemCost;

//Final console log for the hands on.
 console.log("The original item cost $"+itemCost+" and had a "+discount+"% discount. With the "+discount+"% discount that total price of the item came out to $"+finalPrice(itemCost)+".");




































function finalPrice (cost){

 var discountPrice = cost /100 * cost;
 return discountPrice;

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

