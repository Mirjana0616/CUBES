// ***** JS PRACTISING *****


// WHAT SHOULD YOU DO ?


// TASK 1:

// Based on object:

// var someData = {
// 	name: "Peter",
// 	lastName: "Dinklage",
// 	status: "married"
// };

// Create a function that should receive this object, and repack it to the new object
// where values from previous object represent both, keys and values of the new object.

 var someData = {
	name: "Peter",
	lastName: "Dinklage",
	status: "married"
};

function repack(data){
	similarData = {
		[data.name] : data.name,
		[data.lastName] : data.lastName,
		[data.status] : data.status
	}
}

repack(someData);
console.log(similarData);

// TASK 2: 

// Based on array:

// var someData = [13, 45, 56, [32, 11], 27, [55, 92]];

// Create a function that should repack this array to another one where all numbers are contained in the same array,
// in the exact order like in provided array.

var someData = [13, 45, 56, [32, 11], 27, [55, 92]];
var numbersOnly = [];


var repack = function(arr){
	var k = -1;
	for (var i = 0; i < arr.length; i++){
		if (typeof arr[i] == "number"){
			k++;
			numbersOnly[k] = arr[i]
		} else if (typeof arr[i] == "object"){
			for (var j = 0; j < arr[i].length; j++){
				k++;
				numbersOnly[k] = arr [i][j]
		}
		}
	}
}

repack(someData);
console.log(numbersOnly);


// TASK 3: 

// Based on array:

// var someData = [13, 45, 56, [32, 11], 27, [55, 92]];

// Create a function that should receive array, get both subarrays from parent array,
// and pass it into another function, which should then join those arrays.
// In the end result should be returned and stored in variable which contains first function.

var someData = [13, 45, 56, [32, 11], 27, [55, 92]];

var getSubarray = function(arr){
	var subarrays = [];
	var k = 0;
	for (var i = 0; i < arr.length; i++){
		if (typeof arr[i] == "object"){
			subarrays[k++] = arr[i];
		}
	}
	var mergedArrays = merge(subarrays);
	console.log(mergedArrays)
}

function merge(arr){
	var merged = new Array();
	var k = 0;
	for (var i = 0; i < arr.length; i++){
		for (var j = 0; j < arr[i].length; j++){
			merged[k++] = arr[i][j]
		}
	}
	return merged
}

getSubarray(someData);

// TASK 4:

// Based on object:

// var someData = {
// 	name: "Peter",
// 	lastName: "Dinklage",
// 	status: "married"
// };

// Create a function that should check if there is name in object, if yes it should return
// another function which should remove name from the function,
// if no then it should return a function which would set a name property to the object,
// with the value passed once function is called.

 var someData = {
	name: "Peter",
	lastName: "Dinklage",
	status: "married"
};

function isName(obj){
	if (obj.hasOwnProperty("name")){
	 	return function(){
	 		delete obj.name
 		}
	} else {
		return function(nam){
			obj.name = nam
		}
	}
}

isName(someData)("Pit");
console.log (someData);


// TASK 5:

// Based on object:

// var someData = {
// 	name: "Peter",
// 	lastName: "Dinklage",
// 	status: "married"
// };

// Create a method that should check if there is name in object,
// if yes it should create second method in the same object and then call it.
// The second method should remove name from the function, and console log the object in it's current state.
// The second method should then create a third method and call it.
// Third method should add name property back to the object, with value of "Mike", and then console log object.

// BONUS:

// Try to set name with value it had before.

var someData = {
 	name: "Peter",
 	lastName: "Dinklage",
 	status: "married"
};

someData.isName = function(){
	if (this.hasOwnProperty("name")){
		this.removeName = function(){
			delete this.name;
			console.log(this);
			this.goBack = function(){
				this.name = "Mike";
				console.log(this)
			}
			this.goBack()
		}
		this.removeName()
	}
}

console.log("***");
someData.isName();






















