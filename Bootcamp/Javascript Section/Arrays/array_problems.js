var num = [1, 2, 3, 4];
var let = ["b", "b", "b", "b"];

function printReverse(arr) {
	for (i = arr.length - 1; i >= 0; i--) {
	console.log(arr[i]);
	}
};

//***isUniform() ***
function isUniform(arr) {
	var first = arr[0];
	for (i = 1; i < arr.length; i++) {
		if (first !== arr[i])
			return false;
		// else
		// 	continue;
	}
	return true;
}

//*** sumArray() ***
function sumArray(arr) {
	var result = 0;
	// just using for loop
	// for(var i = 0; i < arr.length; i++) {
	// 	result = result + arr[i];
	// }
	// return result;

	// trying to use forEach 
	arr.forEach(function(elem) {
		result += elem;
	});
	return result;
}

//*** max() ***

function max(arr) {
	var high = arr[0]; 
	for(i = 1; i < arr.length; i++) {
		if (high < arr[i]) {
			high = arr[i];
		}
//		else continue;
	}
	return high;
	// 	not working forEach loop
	//  arr.forEach(function(eachNum) {
	// 	if (eachNum > high) {
	// 		high = eachNum;
	// 	}
	// });
}