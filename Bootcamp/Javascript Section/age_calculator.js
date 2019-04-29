var age = prompt("How old are you?")

var leapYears = Math.floor(age/4);

var ageDays = 365 * age + leapYears;

console.log("You have been alive for approximately " + ageDays + " days");
alert("You have been alive for approximately " + ageDays + " days");