var age = Number(prompt("How old are you?"));

if (age < 0) {
	console.log("That is not a valid age");
}

else if (age < 18) {
	console.log("Sorry, you are not old enough to enter");
}

else if (age < 21) {
	console.log("You can enter, but you cannot drink");
}

else if (age === 21) {
	console.log("happy 21st birthday!!");
}

else {
	console.log("Come on in.");
}

if (age % 2 === 1) {
	console.log("Your age is odd!");
}

if (age % Math.sqrt(age) === 0) {
	console.log("Perfect square!")
}