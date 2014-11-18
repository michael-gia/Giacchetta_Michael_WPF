
 /*
Michael Giacchetta
For Loops
WPF 1411
11-07-2014
 */

//alert("Testing 1,2,3");

 //Basic For Loops
  //for(initialization of counter; condition to test; increment of Change)
  //i - stands for iteration

 for( var i =0; i<20; i+=4){
    console.log("i= "+i);

 }


 //Breaks

   //Created a for loop but if the counter variable is 3, I want to stop the loop

 for( var j =0; j<5; j++ ){

    console.log("j= "+j);
     if(j===3){
      break; //This stops looks from cycling


     }

 }


