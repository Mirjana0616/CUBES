
// HOMEWORK 4
//************

//TASK 1/

// CREATE FUNCTION WHICH RECEIVES  SOME ARRAY AND RETURNS ARRAY IN REVERSED ORDER

 
var startArray = [35, 85, 50,44];
var arrayReversed = new Array;
returnArrayReversed(startArray);
console.log(arrayReversed);

function returnArrayReversed(someArray){
	for(var i = someArray.length -1; i >= 0; i--){
		arrayReversed.push(someArray[i]);
	}
};

// TASK 2

//Create a function that should receive parameter of any type, and console log the type of received data

var a = new Array ("Mike", "Tom", "Sebastian");
typeOfData (a);

function typeOfData(data){
	console.log(typeof data);
};

// TASK 3
// Create a function that should receive an array of at least five names,
// and return the length of the longest name in the array 



var names = ["Jenifer", "Alex", "Jim", "Tom", "David"];
var max

var printLargestName = function(someNames){
	var maxName = "";
	for(i = 0; i < someNames.length; i++){
		if(someNames[i].length > maxName.length){
			maxName = someNames[i];
		};
	max = maxName.length;
	};
};
printLargestName(names);
console.log (max);

// TASK 4

//Create a function that should receive an array of numbers,
//find the second lowest and second greatest number, and console log result


var numbers = [5, 400, 56, 9, 78, 1]
var orderedNumbers = [];

var lowest2greatest2 = function (someNumbers){
	var min;
	var minIndex;

	for (var j = 0 ; j < someNumbers.length ; j++){
		min = 1000000;
		minIndex = 1000000;
		for (var i = 0 ; i < someNumbers.length ; i++){
			if (someNumbers[i] && (someNumbers[i] <= min)){
				min = someNumbers[i];
				minIndex = i;
			};
		};
		
		if (min !== 1000000){
			orderedNumbers.push(min);
		};
		delete someNumbers[minIndex];
	};
	console.log (orderedNumbers[1], orderedNumbers[orderedNumbers.length - 2]);

};

lowest2greatest2(numbers);

console.log(orderedNumbers);



/* TASK 5

Create two functions. First one should receive two parameters, an array of numbers, and a single number.
Then it should call the second function, and pass the same array and number into it.
The second function should, based on an array and number provided, find all numbers in an array
which are bigger then a provided number, and create an array of those numbers. Then it should console log result. */

var numbers = new Array(3, 7, 22, 89, 4, 1);
var number = 5;

var printNumbers = function (numbersD, numberD){
	var numbersBiggerThan = [];
	for (var i = 0; i < numbersD.length; i++){
		if (!(numbersD[i] > numberD)){
			continue;
		};
		numbersBiggerThan.push (numbersD[i]);
	};
	console.log (numbersBiggerThan);
};

var call = function(numbersD, numberD){
	printNumbers (numbersD, numberD);
};

call (numbers, number);


