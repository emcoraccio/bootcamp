var answer = prompt("Are we there yet?");

while (answer.indexOf("yes") < 0 && answer.indexOf("yeah") < 0) {
	var answer = prompt("Are we there yet?");
}

alert("Yay we made it!");