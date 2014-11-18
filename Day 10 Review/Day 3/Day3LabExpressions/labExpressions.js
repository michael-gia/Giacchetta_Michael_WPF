/**
 * Created by michaelgiacchetta on 10/31/14.
 */




//alert("Hello");

    //Slices of pizza per person

var slicesPerPizza = 8;
var numberOfPizzas = 4;
var numberOfPeople = 10;

var answer =  (slicesPerPizza*numberOfPizzas/numberOfPeople) ;

var answer2 = "Each person ate "+answer+" slices of pizza at the party"

console.log(answer2);

//Slices of Pie part 2

var sparkySlices ="Sparky will get "+ (slicesPerPizza*numberOfPizzas%numberOfPeople)+" slices of pizza.";

console.log(sparkySlices);

//Average Shopping Bill

var weeklyBill1 = 100;
var weeklyBill2 = 100;
var weeklyBill3 = 100;
var weeklyBill4 = 100;
var weeklyBill5 = 100;

var amount = weeklyBill1+weeklyBill2+weeklyBill3+weeklyBill4+weeklyBill5;
var totalAmount = "You have spent a total of $"+amount+" on groceries over 5 weeks. That is an average of $"+weeklyBill1+" per week.";

console.log(totalAmount);





//Discounts

//


//Supermarket Sushi
var original = 10;
var discountPercentage = 20;
var discountToDecimal = discountPercentage / 100;
var discount = discountToDecimal * original;
var totalAfterDiscount = original - discount;
var tax = 10;

console.log("Original: $"+original);
console.log("Discount: $"+ discount);
console.log("Sushi Roll");
console.log("Sales Tax 10 percent")

var tax = 10;
var taxPercentage = tax / 100; //1
var withTax = totalAfterDiscount - taxPercentage ;
var withoutTax = totalAfterDiscount;

console.log("Your sushi was originally $"+original+", but after a "+discountPercentage+"% discount, it is now $"+totalAfterDiscount+
" without tax, and $"+withTax+" with tax.")





















