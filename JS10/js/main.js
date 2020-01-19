// ***** JS PREDEFINED FUNCTIONS HOMEWORK *****


// WHAT SHOULD YOU DO ?


// TASK 1

// Based on given string:

// "Lorem ipsum dolor sit amet"

// Create a function that should receive string, and transform all letters to lowercase.

var sentence = "Lorem ipsum dolor sit amet";

var toLow = function(sentence){
  return sentence.toLowerCase();
}

console.log(toLow(sentence));

// TASK 2

// Based on given string:

// "Lorem ipsum dolor sit amet"

// Create a function that should check if there is a word "sit" in the string, and console log sentence
// saying that it exist or not.

var sentence = "Lorem ipsum dolor sit amet";

var check = function(sentence){
  sentence.indexOf("sit") != -1 ? console.log("sit exists") : console.log("sit does not exist");
}

check(sentence);

// TASK 3

// Based on given string:

// "Lorem ipsum dolor sit amet"

// Create a function that should find and return index of the last letter in the sentence.

var sentence = "Lorem ipsum dolor sit amet";

var ll = function(sentence){
  return sentence.length - 1;
}

console.log(ll(sentence));

// TASK 4

// Based on given string:

// "Lorem ipsum dolor sit amet"

// Create a function that should split string based on empty space, and return first 3 results.

var sentence = "Lorem ipsum dolor sit amet";

var first3 = function(sentence){
  f3 = sentence.split(" ");
  f3.splice(3, 100);
  return f3
}

console.log(first3(sentence));

// TASK 5

// Based on given string:

// "Piter is an actor."

// Create a function that should turn a string into the following string:

// "Pitor is an acter."

var sentence = "Piter is an actor.";

var turn = function(sentence){
  sentence = sentence.replace("e", "o");
  console.log(sentence);
}

turn(sentence);

// TASK 6

// Based on given array:

// var someData = [34, 23, 14, 56, 23, 44, 65];

// Create a function that should remove number 56 from an array and return array without it.

var someData = [34, 23, 14, 56, 23, 44, 65];

var rm = function(arr){
  var position = arr.indexOf(56);
  arr.splice(position, 1);
  return arr;
}

console.log(rm(someData));

// TASK 7

// Based on given array:

// var someData = [34, 23, 14, 56, 23, 44, 65];

// Create a function that should turn it into following array:

// var otherData = [23, 14, 56, 65, 44, 23];

var someData = [34, 23, 14, 56, 23, 44, 65];

var turn = function(arr){
  arr.shift();
  arr.splice(3, 0, arr[arr.length - 1], arr[arr.length - 2]);
  arr.pop();
  arr.pop();
  return arr;
}

console.log(turn(someData));

// TASK 8

// Based on given array:

// var someData = [334, 233, 212, 199, 154, 122];

// Create a function that should repack array to the new one, where each element should be current one, 
// reduced by value of previous one from initial array.

var someData = [334, 233, 212, 199, 154, 122];
var reducedNumbers = [];

var reduce = function(arr){
  reducedNumbers[0] = someData [0];
  for (var i = 1; i < arr.length; i++){
    reducedNumbers[i] = arr[i] - arr[i-1];
  };
  console.log(reducedNumbers);
};

reduce(someData);

// TASK 9

// Based on given array:

// var students = [
//   {
//      name: "Jim",
//      avgGrade: 8.5556
//   },
//   {
//      name: "Mike",
//      avgGrade: 8.5492
//   },
//   {
//      name: "Anna",
//      avgGrade: 8.9322
//   },
//   {
//      name: "Jack",
//      avgGrade: 8.6111
//   }
// ]

// Create a function that should return new array with all students whose average grade is larger than 8.5.
// In new array, average grade should be formatted to 2 decimals.

var students = [
  {
     name: "Jim",
     avgGrade: 8.5556
  },
  {
     name: "Mike",
     avgGrade: 8.5492
  },
  {
     name: "Anna",
     avgGrade: 8.9322
  },
  {
     name: "Jack",
     avgGrade: 8.6111
  }
]

var trijaza = function(arr){
  var goodStudents = [];
  var j = 0;
  for (var i = 0; i < arr.length; i++){
    if (arr[i].avgGrade > 8.5) {
      goodStudents[j] = arr[i];
      goodStudents[j].avgGrade = goodStudents[j].avgGrade.toFixed(2);
      j++;
    }
  }
  return goodStudents
}

console.log(trijaza(students));