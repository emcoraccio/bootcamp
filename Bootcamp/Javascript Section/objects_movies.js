movieDB = [
	{title: "My Cousin Vinny", 
	rating: 5, 
	hasWatched: true},
	
	{title: "Coco", 
	rating: 5, 
	hasWatched: false},
	
	{title: "The Other Guys", 
	rating: 4.5, 
	hasWatched: true},
	
	{title: "The Aristocats", 
	rating: 2, 
	hasWatched: false}
];

// using for loop 
// for (var i = 0; i < movieDB.length; i++) {
// 	if (movieDB[i].hasWatched === true) {
// 		console.log("You have watched " + movieDB[i].title + " - " + movieDB[i].rating + " stars");
// 	}
// 	else {
// 		console.log("You have not seen " + movieDB[i].title + " - " + movieDB[i].rating + " stars");
// 	}
// };

// using forEach loop
// movieDB.forEach(function(movieDB) {
// 	var result = "You have ";
// 	if (movieDB.hasWatched) {
// 		result += "watched ";
// 	}
// 	else {
// 		result += "not seen ";
// 	}
// 	result += "\"" + movieDB.title + "\"" + " - "
// 	result += movieDB.rating + " stars";
// 	console.log (result);
// });


//using separate function function 
function buildString(movieDB) {
	var result = "You have ";
	if (movieDB.hasWatched) {
		result += "watched ";
	}
	else {
		result += "not seen ";
	}
	result += "\"" + movieDB.title + "\"" + " - "
	result += movieDB.rating + " stars";
	return result;
}

movieDB.forEach(function(movieDB) {
	console.log(buildString(movieDB));
});


