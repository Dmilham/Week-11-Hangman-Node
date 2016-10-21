
var letter = require('./letter.js');

var Word = function(wrd) {
	var lets = [];
	this.found = false;
	function getLets(corLet) {
		for (var i = 0; i < wrd.length; i++) {
			if (corLet == wrd[i]) {
				lets.push(new letter.Letter(corLet));
			} else {

			}
		}
	};
	getLets(wrd);
	this.didWeFindTheWord = function() {
		var count = 0;
		for (var i = 0; i < this.lets.length; i++) {
			if (this.lets[i].appear) {
				count++;
			}
		}
		if (count === this.lets.length) {
			this.found = true;
		}
		return this.found;
	};
	    this.checkIfLetterFound = function(guessLetter) {
		var whatToReturn = 0;
		for (var i = 0; i < this.lets.length; i++) {
			if (this.lets[i].charac === guessLetter) {
				this.lets[i].appear = true;
				whatToReturn++;
			}
		}
		return whatToReturn;
	};
	this.wordRender = function() {
		var str = "";
	
		for (var i = 0; i < this.lets.length; i++) {
			str += this.lets[i].letterRender();
		}
		return str;
	};
};

exports.Word = Word;