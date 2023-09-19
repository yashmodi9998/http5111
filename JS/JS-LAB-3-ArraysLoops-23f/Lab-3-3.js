//LAB 3 - ARRAYS & LOOPS - PART 3

//PART 3 - SHOPPING CART SHIPPING
//==== VARIABLES ========

var cartTotal=[];
var total = 0;
var convValue;
var userEnteredValue;
//==== LOGIC ========
//CHECK FOR ITEMS UNTIL THRESHOLD IS MET.
while( total < 35){
	//GET ITEM COST FROM USER
	
	userEnteredValue = prompt("Enter your item value");
	if(!isNaN(userEnteredValue)){

	//CONVERT USER INPUT TO A NUMBER
	convValue = parseInt(userEnteredValue);

	//ADD ITEM COST TO RUNNING TOTAL VARIABLE
	total = total+convValue;

	//PUSH ITEM COST TO CART ARRAY
	cartTotal.push(convValue);
	console.log(cartTotal);
	}
	//SEND POPUP MESSAGE TO USER
	// if(total >= 35){
		

			// }
}
alert("Your shipping for this order will be free!");
console.log("Your total");
console.log(cartTotal.join("|"));

alert("You have spent "+total );





//SEND OUTPUT TO CONSOLE

