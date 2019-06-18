console.log("test")

var computerChoices = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var wins = 0;
var losses = 0;
var guessesLeft = 9;


var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text")
var guessesLeftText= document.getElementById("guesses-left")
var yourGuesses = document.getElementById("your-guesses");

document.onkeyup = function(event) {

    var userGuess = event.key;

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    if (userGuess === computerGuess){
        console.log(test)
        winsText.textContent = "wins: " + wins;

        lossesText.textContent = "losses: " + losses;
    }

}
