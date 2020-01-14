// ***** JS PRACTISE HOMEWORK *****


// WHAT SHOULD YOU DO ?

// TASK 1:

// Create array with data, and loop through it, so in the end you console log this:

// "At position 0, subposition 0, value is 1"
// "At position 0, subposition 1, value is 2"
// "At position 0, subposition 2, value is 3"
// "At position 1, subposition 0, value is 4"
// "At position 1, subposition 1, value is 5"
// "At position 1, subposition 2, value is 6"
// "At position 2, subposition 0, value is 7"
// "At position 2, subposition 1, value is 8"
// "At position 2, subposition 2, value is 9"

var arr = [];
var value = 0;

for (var i = 0; i <= 2; i++){
	arr[i] = [];
	for (var j=0; j <=2; j++){
		value++;
		arr[i][j] = value;
	}
}

for (var i = 0; i <= 2; i++){
	for (var j=0; j <=2; j++){
		console.log("At position " + i + ", subposition " + j + ", value is " + arr[i][j])
	}
}

// TASK 2: 

// Create a method that should console log name and age from any object.
// Then create array with multiple objects, each object should contain different names and ages.
// Call a method on each of them.

Object.prototype.consoleLog = function(){
	console.log(this.name, this.age)
}
someArray = [
	{
		name : "Jim",
		age : 21,
	},
	{
		name : "Mike",
		age : 42,
	},
	{
		name : "Steve",
		age : 30
	}
]

for (var i=0; i < someArray.length; i++){
	someArray[i].consoleLog()
}




