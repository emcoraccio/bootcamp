var button = document.querySelector("button");
var page = document.querySelector("body");

button.addEventListener("click", function() {
	page.classList.toggle("bg-purple");
});


// var button = document.querySelector("button");
// var isPurple = false;

// button.addEventListener("click", function() {
// 	if(isPurple {
// 		document.body.style.background = "white";
// 	else {
// 		document.body.style.background = "purple";
// 	}
// 	isPurple = !isPurple;
// 	})
// });