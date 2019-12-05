// TASK 6:

// Create three functions. 

// First one should receive an array and return the lowest number in the array.
// Second one should receive an array and return the highest number if an array.

// Third function should receive first two functions, and should multiply the result of the first function with the result of the second function. Then it should console log the result.

var numArr1 = [368, 123, 88, 102,58];
var numArr2 = [35,469,12,90,367];

var lowest = function(arr){
	var lowestNum = arr[0];

	for(var i = 1; i <  arr.length; i++){
		if(arr[i] < lowestNum){
			lowestNum = arr[i];
		}
	}
	return lowestNum;
};

var highest = function(arr){
	var highestNum = arr[0];

	for(var i = 0; i < arr.length; i++){
		if(arr[i] > highestNum){
			highestNum = arr[i];
		}
	}
	return highestNum;
};

var multiply = function(funk1, funk2){
	var product = funk1 * funk2;

	console.log(product);
}

multiply(lowest(numArr1),highest(numArr2));



// TASK 7:

// Create a function that should receive an array and the second function.
// Array should be:// [15, 35, 46, 23, 15, 17, 23, 24, 35, 12, 72, 64, 35, 22, 64]
// After array is received you should find all numbers from array which are unique,
// and create a new array out of them.
// Then, the second function that is passed in the first one should be called,
// and it should receive this new array we created.
// It should then delete the biggest number in the array, and console log the result (array).


var numArr = [15, 35, 46, 23, 15, 17, 23, 24, 35, 12, 72, 64, 35, 22, 64];

var findUnique = function(arr, funk){
	var isUnique;
	var unique = [];

	for(var j = 0; j < arr.length; j++){
		isUnique = true;
		for(var i = 0; i < arr.length; i++){
			if (j === i){
				continue;
			}
			if(arr[j] === arr[i]){
				isUnique = isUnique && false;
				break;
			}
		}
		if(isUnique){
			unique[unique.length] = arr[j];
		}
	}
	funk(unique);
}

var deleteTheHighest = function (arr){
	delete arr[arr.indexOf(highest(arr))];
	console.log(arr);
}


findUnique(numArr, deleteTheHighest);



// napraviti funkciju koja kao argumente prima dva broja, funkciju racunske operacije izmedju njih,
// treci broj i funkciju racunske operacije dobijenog rezultata i tog broja, i stampa konacni rezultat


var add = function (a, b){
	return a + b;
}

var multiply = function (a, b){
	return a * b;
}

var calculate = function(a, b, funk1, c, funk2){
	var result = funk2(funk1(a, b),c);
	console.log(result);
}

calculate(3, 5, add, 7, multiply);




