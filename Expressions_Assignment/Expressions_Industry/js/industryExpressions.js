
 /*
Michael Giacchetta
Industry Expressions
WPF 1411
11-03-2014
 */

//alert("Testing 1,2,3");

//For this I am going to create an invoice for a photographer covering a a conferance.

 var costPerDay =150
 var costPerPicture =.25
 var photosTaken =[440, 200, 500,];
 var totalPhotos = photosTaken[0]+photosTaken[1]+photosTaken[2];



var costPerDayTotal = photosTaken.length * costPerDay;
 var costPerPictureTotal = totalPhotos * costPerPicture;

 //Lets say that two companies hosted the conference and are splitting the totally bill for the photographer.

 var totalCost =costPerDayTotal + costPerPictureTotal;
 var finalInvoice = totalCost /2;

 console.log("The conferance lasted "+photosTaken.length+" days. Over the course of that time "+totalPhotos+" photos were taken.\n"+
 "With the fee of $"+costPerDay+" per day, combined with the fee of "+costPerPicture+" cents per picture brings the total cost to $"+totalCost+".\n" +
 "Your company owes a total of $"+finalInvoice+".");

 //With the two companies splitting the cost, the total should come out to $367.50







