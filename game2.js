Word = require('./word2.js');

var wordOptions		= [
	'DOC',
	'DOPEY',
	'BASHFUL',
	'GRUMPY',
	'SNEEZY',
	'SLEEPY',
	'HAPPY'
	];
var selectedWord 	= "";

	// Start Game Function.

function Game(){
	
	// Computer randomly chooses one of the names from the array.
	selectedWord	= wordOptions[Math.floor(Math.random()*wordOptions.length)];
	console.log(selectedWord);
	Word(selectedWord);

	//SelectedWord becomes individual letters.
	lettersInWord	= selectedWord.split("");

	// Determine number of blanks for selectedWord.
	numBlanks		= lettersInWord.length;

	// Resets some variables for successive games.
	guessesLeft			= 9;
	wrongLetters		= [];
	blanksAndSuccesses	= [];

	// Populates blanksAndSuccesses with correct number of blanks.
	for ( var i = 0; i < numBlanks; i++) {
		blanksAndSuccesses.push("_");
	}



	console.log(blanksAndSuccesses);
}
exports.Game = Game;