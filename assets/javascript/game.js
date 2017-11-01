// Creates an array that lists out all of the options.
var allChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Computer Chooses Letter.
var compGuess = allChoices[Math.floor(Math.random() * allChoices.length)];
console.log(compGuess);

var wins = 0;
var losses = 0;
var guesses = 10;
var sofar = [];


// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
    // if(guesses >= 0) {
    // Determines which key was pressed.
    var userGuess = event.key;

    // This logic determines the outcome of the game

    if(userGuess === compGuess) {
        wins++;
        guesses = 10;
        sofar = [];
        //--computer needs to pick a new letter--//
    }
    else {
        guesses--;
    }

    if(guesses === 0) {
        losses++;
        guesses = 10;
        sofar = [];

    }


    //Log Guesses So Far:

    sofar.push(userGuess)

    //--need to also figure out how to alert user if they pick the same letter again--//



    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "losses: " + losses;
    document.getElementById('guesses').innerHTML = "Guesses Left:" + guesses;
    document.getElementById('sofar').innerHTML = "Guesses So Far:" + sofar.toString();
    // }
}
