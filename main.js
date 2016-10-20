
var inquirer 	= require('inquirer');
var word 		= require('./word.js');
var Game 		= require('./game.js')

// GLOBAL VARIABLES:

var lettersInWord 		= [];
var numBlanks 			= 0;
var blanksAndSuccesses 	= [];
var wrongLetters		= [];

// Game Counters:

var winCount			= 0;
var lossCount			= 0;
var guessesLeft			= 0;

// MAIN PROCESS
Game();

// Captures Key Clicks
document.onkeyup = function(event) {

	// Determines which exact key was selected, then apitalizes the letter.

	var userGuess = String.fromCharCode(event.keyCode).toUpperCase();

	checkLetters(userGuess);

	roundComplete();

	//  ^ Arrow keys, etc. would be logged as entries. I dont know how to fix this.

// Show the letter guessed:
	
	console.log('You guessed ' + userGuess);

}
