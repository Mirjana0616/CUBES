// ***** JS OBJECTS HOMEWORK *****


// WHAT SHOULD YOU DO ?

// TASK 1: 

// Based on existing object:

// var person = {
// 	name: "Mike";
// 	age: 28,
// 	married: true
// }

// Create a function which should change age to 34, and delete married property. In the end console.log object.


var person = {
  name: "Mike",
  age: 28,
  married: true
}

var changePerson = function(){
  person["age"] = 34;
  delete person["married"]
}

changePerson();
console.log(person);

// TASK 2: 

// Based on existing object:

// var person = {
// 	name: "Jack";
// 	age: 32,
// 	married: true
// }

// Create a function which should check if person has children property, if not add it. Its value should be array
// containing two objects with children data. Each object should contain child name, age and gender.


var person = {
  name: "Jack",
  age: 32,
  married: true
}

function children(){
  if (person["children"]){
    return;
  }
  var child1 = new Object();
    child1.name = "Mary";
    child1.age = 8;
    child1.gender = "female";
  
  var child2 = new Object();
    child2.name = "George";
    child2.age = 9;
    child2.gender = "male";
  
  person["children"] = [child1, child2];
}

children();
console.log(person.children);

// TASK 3:

// Based on existing array of objects:

// var students = [ 
//    {
//        name: 'Mike',
//        age: 28,
//        passed: false
//    },
//    {
//        name: 'Anna',
//        age: 23,
//        passed: true
//    },
//    {
//        name: 'Jack',
//        age: 32,
//        passed: true
//    },
// ];

// Create a function which should console.log if student passed exam, result should be something like:

// "Jack passed exam" or "Mike didn't pass exam"

var students = [ 
   {
       name: 'Mike',
       age: 28,
       passed: false
   },
   {
       name: 'Anna',
       age: 23,
       passed: true
   },
   {
       name: 'Jack',
       age: 32,
       passed: true
   },
];

var passedOrNot = function(){
  var passed;
  for (i = 0; i < students.length; i++){
      passed = (students[i].passed) ? "passed exam" : "didn't pass exam";
      console.log (students[i].name + " " + passed);
  }
}

passedOrNot();

// TASK 4:

// Based on existing array of objects:

// var students = [ 
//    {
//        name: 'Mike',
//        age: 28,
//        passed: false
//    },
//    {
//        name: 'Anna',
//        age: 23,
//        passed: true
//    },
//    {
//        name: 'Jack',
//        age: 32,
//        passed: true
//    },
// ];

// Create a function which should repack existing data into three arrays, names, ages, and passed. Example of names array:

// var names = ['Mike', 'Anna', 'Jack'];

var students = [ 
   {
       name: 'Mike',
       age: 28,
       passed: false
   },
   {
       name: 'Anna',
       age: 23,
       passed: true
   },
   {
       name: 'Jack',
       age: 32,
       passed: true
   },
];

var names = [];
var ages = [];
var passed = [];

function repack(){
  for (i = 0; i < students.length; i++){
    names[i] = students[i].name;
    ages[i] = students[i].age;
    passed[i] = students[i] ["passed"];
  }
}

repack();
console.log (names, ages, passed);


// TASK 5:

// Based on existing object:

// var person = {
// 	name: "Jack";
// 	age: 32,
// 	married: true
// }

// Create the other object which should inherit data from existing object.
// Then console.log age by accessing the newly created object.

var person = {
 name: "Jack",
 age: 32,
 married: true
}

var personNew = Object.create (person);

console.log(personNew.age);


// TASK 6:

// Based on existing object:

// var person = {
// 	name: "Mike";
// 	age: 28,
// 	married: true
// }

// Create a method which, when called, should console.log name and age of existing object.

var person = {
  name: "Mike",
  age: 28,
  married: true
}

person.print = function(){
    console.log("name: " + this.name + "; " + "age: " + this.age)
}

person.print();

// TASK 7:

// Based on existing object:

// var person = {};

// Create a method which should create name, age and married properties in existing object,
// based on parameters passed in method.

 var person = {};

 person.create = function(name, age, married){
    this.name = name;
    this.age = age;
    this.married = married
 }

 person.create ("George", 30, "true");
 console.log(person);


