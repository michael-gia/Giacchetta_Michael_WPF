
 /*
Michael Giacchetta
Industry Conditionals
WPF 1411
11-09-2014
 */

//alert("Testing 1,2,3");

 //Should I sweep the motor pool?

 var day = prompt("What day is it?");
 var whatTime = prompt("What time is it in military time?");
 var rank = prompt ("what rank are you?");
 var weather = prompt("what is the weather like outside?")
 var sandStorm = prompt("Is there a sand storm outside?");

 var rank = [1,2,3,4,5,6];


 day=true
 whatTime=true
 weather=true
 sandStorm=true

if(day && whatTime && weather && sandStorm && rank <rankE6 ){
   console.log("Go sweep the motor pool!");


} else {
 console.log("Tell your Soldiers to sweep the motor pool while you sit and relax.");
}



