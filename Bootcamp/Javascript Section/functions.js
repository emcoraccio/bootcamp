//function which returns true if even, and false otherwise
// function isEven(num) {
// 	if (num % 2 === 0) {
// 		return true;
// 	}
// 	else {
// 		return false;
// 	}
// };

function isEven(num) {
	return num % 2 ===0;
}

function factorial(num) {
	if (num === 0) {
		return 1;
	}
	else {
		for (i = num - 1; i > 0; i--) {
		num *= i
		}
	return num;
	}
};

//could also do 
// function factorial(num) {
//		var result = 1;
//		for(var i = 2; i <= num; i++){
//			result *=i;
//		}
//		return result;
//}


function kebabToSnake(str) {
	var snake = str.replace(/-/g, "_");
	return snake;
};