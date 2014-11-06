
 /*
Michael Giacchetta
Multiple Conditions
WPF 1411
11-05-2014
 */

//alert("Testing 1,2,3");

 var frontTirePressure =[32,32];
 var backTirePressure =[30,33];

 if ((frontTirePressure[0]==frontTirePressure[1]) && (backTirePressure[0]==backTirePressure[1])) {
  console.log("The tires pass pec!");

 }


 else if (frontTirePressure[0] !== frontTirePressure[1] || backTirePressure[0] !== backTirePressure[1])
 {

  console.log("Get your tires checked out!");

 }




