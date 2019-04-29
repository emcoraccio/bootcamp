//create secretNumber
var secretNumber = 4;

//ask user for guess
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);

//check if guess is right
if (guess === secretNumber) {
	alert("You guessed it!!")
}

//check if guess is lower
else if (guess < secretNumber) {
	alert("That guess is too low, try again.");
}

//check if guess is higher
else {
	alert("That guess is too high, try again.");
}