//LAB 3 - ARRAYS & LOOPS - PART 2


//PM TEAM MEMBER ARRAY
var ourTeam=['Yash','Priyam','Abhishek','Milin','Scott'];

//OUTPUT TEAM ARRAY TO JS CONSOLE
console.log(ourTeam);

//REMOVE LAST MEMBER

ourTeam.pop();
console.log("After removing last member \n"+ourTeam);
//ADD SEAN TO FRONT OF ARRAY
ourTeam.unshift('Sean');

console.log("After adding Sean \n"+ourTeam);
//REARRANGE THE ARRAY ALPHABETICALLY
ourTeam.sort();
console.log("After Sorting \n"+ourTeam);
//OUTPUT REQUIRED MESSAGE TO JS CONSOLE


console.log("We have "+ourTeam.length +" people in our group.");

//LOOP THROUGH ARRAY TO OUTPUT TEAM MEMBERS/NUMBERS TO JS CONSOLE
for(var i=0;i<ourTeam.length;i++){
    console.log(ourTeam[i]+" is #"+[i+1]);
}
