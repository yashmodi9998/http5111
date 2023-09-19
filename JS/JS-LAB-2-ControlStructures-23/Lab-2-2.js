//######## LAB 2-2 LOGIN ########
//1. LINK THIS JS FILE TO THE HTML FILE
// alert("hey 2.2");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE

//====VARIABLES===============
//2. CREATE NECESSARY VARIABLES
		// Correct user name
		// Correct password
		// user name input
		// password input
var uname = "dart";
var pwd = "vader";



//====LOGIC===================
//3. CREATE POPUP BOX FOR USERNAME
var userName = prompt("Enter user name");
//4. OUTPUT PROVIDED USERNAME TO JS CONSOLE
console.log(userName);
//5. CREATE POPUP BOX FOR PASSWORD
var password = prompt("Enter password");
//6. OUTPUT PROVIDED PASSWORD TO JS CONSOLE
console.log(password);
//7. CHECK IF PROVIDED USERNAME AND PROVIDED PASSWORD MATCH THE STORED USERNAME/PASSWORD
if(userName === uname && password === pwd){

//8. IF THEY MATCH, POPUP SUCCESS MESSAGE AND OUTPUT TO CONSOLE
alert('Welcome back '+ uname);
console.log("Login successful");
}


//9. IF THEY DON'T MATCH, POPUP INVALID MESSAGE & OUTPUT TO CONSOLE
else{
	alert("Invalid username/password");
console.log("Login fail");

}