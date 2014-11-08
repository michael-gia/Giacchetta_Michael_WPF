
 /*
Michael Giacchetta
Day 7 While Loops
WPF 1411
11-07-2014
 */

//alert("Testing 1,2,3");

 //Basic While Loops
 //The while loop will loop through a block of code as long as the condition remains true.

 var counter =0; //Step one, initialize the counting variable

 while(counter<20){ //condition will run as long as this is true
    console.log("Somethings will never end "+counter);

    //Update or change the counting variable
    counter++;


 }
 console.log("End of loop- Last counter variable "+counter);

 //Do while Loop
 //its sort of like the while loop
 //Difference is, the code will run at LEAST once!

 var i = 0; //counter variable

 do{
     console.log("The counting number is "+i);

  //Update or change the counting variable
  i+=5;


 }while(i<50);

