//variables
var teamNumber;
var defaultTeamNumber = 5;
var firstName;
var name1 = "yash";
var name2 = "milin";
var name3 = "priyam";
var name4 ="erik";
var name5 ="sarah"

 teamNumber = prompt('Please enter your team number.(1-6)',"Please enter 5"); //ask user to enter team number.by default it is 5.

if(teamNumber === "" || teamNumber === null || isNaN(teamNumber)){ // check when user do not entered any value or cancel prompt or entered string

    alert("Sorry,Your access is denied.");//give user a message that your access is denied. 

}
else if(teamNumber === defaultTeamNumber.toString()){  //check if team num is 5.
   
    firstName=prompt('Enter your name: for e.g. yash').toLowerCase(); //ask user to enter name and convert it to lowercase.

    switch (firstName) {
            //checks user first name and return it with fullName.
            case name1:
                alert("Welcome, Yash Modi");
                break;
            case name2:
                alert("Welcome, Milin Vaniyawala");
                break;
            case name3:
                alert("Welcome, Priyam Vashi");
                break;
            case name4:
                alert("Welcome, Erik Abraham");
                break;
            case name5:
                alert("Welcome, Sarah Tadele");
                break; 
            
        default:
            //if user entered wrong name or other name
            alert("Sorry,Your access is invalid because you have entered wrong name.");
            break;
    }

}

else{
    //If user enters different team number
    alert("Sorry,You have entered wrong team number.");  
}