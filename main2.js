
var inquirer 	= require('inquirer');
Word 			= require('./word.js');
var Game 		= require('./game.js');
Letter 			= require('./letter.js');


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
Bro = function(event) {

	// Determines which exact key was selected, then capitalizes the letter.

	// var userGuess = String.fromCharCode(event.keyCode).toUpperCase();

	// // checkLetters(userGuess);
	//Letter(userGuess);
	// var bruh = Word.checkIfLetterFound(event);

	console.log('You guessed ' + event);

	//roundComplete();

	//  ^ Arrow keys, etc. would be logged as entries. I dont know how to fix this.

}

Bro(process.argv[2]);