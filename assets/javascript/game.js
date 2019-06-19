console.log("test")

var computerChoices = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
// var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
var computerGuess = "A";
console.log("computerGuess");
console.log(computerGuess);
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guesses-left");
var yourGuessesText = document.getElementById("your-guesses");

guessesLeftText.textContent = "Guesses left: " + guessesLeft;
winsText.textContent = "wins: " + wins;
lossesText.textContent = "losses: " + losses;


document.onkeyup = function (event) {

    var userGuess = event.key;

    console.log(userGuess)

    if (userGuess == computerGuess) {

        guessesLeft--;
        wins++;

        console.log("test")
        winsText.textContent = "wins: " + wins;

        lossesText.textContent = "losses: " + losses;

        guessesLeftText.textContent = "Guesses left: " + guessesLeft;

        yourGuessesText.textContent = "Your Guesses: " + userGuess;

    }
    else if (userGuess !== computerGuess) {
        guessesLeft--;
        losses++;
        console.log("test")
        winsText.textContent = "wins: " + wins;

        lossesText.textContent = "losses: " + losses;

        guessesLeftText.textContent = "Guesses left: " + guessesLeft;

        yourGuessesText.textContent = "Your Guesses: " + userGuess;
    }

}
