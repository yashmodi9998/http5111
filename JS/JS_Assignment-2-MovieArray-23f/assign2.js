//2.VARIABLES 
var movie1 = "Hulk";
var movie2 = "Thor";
var movie3 = "IronMan";
var movie4 = "Starwars";
var movie5 = "Misson Impossible";
var movie6 = "Superman";
var movie7 = "Batman";

var userMovie;
var selectedMovie;

// 3.Array that collects movies name
var myMovies = [movie1, movie2, movie3, movie4, movie5, movie6, movie7];

//4-5.User asked to enter any number between 1 to 7. 
userMovie = prompt("Which top 7 movie would you like?", "Pick a number: 1-7");

//STRETCH : loop for re asking user to enter number if user enter out of range number.
while (userMovie < 1 || userMovie  > 7 || isNaN(userMovie)) {
    alert("Please enter a number between 1 and 7!");
    
    //Prompt that ask user to enter any movie again.
    userMovie = prompt("Which top 7 movie would you like?", "Pick a number: 1-7");
    
}

//Checks whether entered number is between in range of 1 to 7
if (userMovie >= 1 || userMovie <= 7) {
    selectedMovie = myMovies[userMovie - 1];

    //7.pop-up message for displaying number of movie
    alert("Number " + userMovie + " on the list is " + selectedMovie);
    for (var i = 0;i < myMovies.length;i++){

        //8. console message for displaying list of movies.
        console.log("Movie " + (i + 1) +" : " + myMovies[i]);
    }

}
