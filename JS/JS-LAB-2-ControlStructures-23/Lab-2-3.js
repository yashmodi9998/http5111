//######## LAB 2-3 EMAIL SIGNUP ########
// alert("hey 2.3");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE
//==== VARIABLES =========
var confirmUser = confirm('Would you like to join in mailing group');
var emailInput;


//==== LOGIC =============
if(confirmUser === true){
    emailInput = prompt('Enter your email','me@example.com')
    if(emailInput === "" || emailInput === null || emailInput === "me@example.com"){
        alert("Thank you, but your email was not valid.");
    }
    else{
        alert("Thank you, our next newsletter will be sent to "+emailInput);
    }
}
else{
alert("Thank you, we will not bother you again");
}