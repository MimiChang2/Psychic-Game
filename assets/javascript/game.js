// Creates an array that lists out all of the options.
var allChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Computer Chooses Letter.
var compGuess = allChoices[Math.floor(Math.random() * allChoices.length)];
console.log(compGuess);

var wins = 0;
var losses = 0;
var guesses = 10;
var sofar = [];

function resetGame() {
    guesses = 10;
    sofar = [];
    compGuess = allChoices[Math.floor(Math.random() * allChoices.length)];
    console.log(compGuess);
}

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
    // if(guesses >= 0) {
    // Determines which key was pressed.
    var userGuess = event.key;

    // Did they already try this letter?
    if(sofar.indexOf(userGuess) >= 0) {
        alert("You've already tried that letter! Guess again.");
        return;
    }

    // This logic determines the outcome of the game

    if(userGuess === compGuess) {
        wins++;
        resetGame();
    }
    else {
        guesses--;
    }

    if(guesses === 0) {
        losses++;
        resetGame();
    }

    //Log Guesses So Far:

    sofar.push(userGuess)



    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "losses: " + losses;
    document.getElementById('guesses').innerHTML = "Guesses Left:" + guesses;
    document.getElementById('sofar').innerHTML = "Guesses So Far:" + sofar.toString();
    // }
}
