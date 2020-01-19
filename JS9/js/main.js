
// ***** JS FUNCTIONS ADVANCED HOMEWORK *****


// WHAT SHOULD YOU DO ?

// TASK 1:

// Create a constructor function for generating student objects. Each student object should have name, 
// last name, age and average grade.

function Student(name, lastName, age, avGrade){
	this.name = name;
	this.lastName = lastName;
	this.age = age;
	this.averageGrade = avGrade;
};

var Peter = new Student ("Peter", "Peterson", 24, 9);
console.log (Peter);

// TASK 2:

// Create a constructor function for generating objects with data about players of your favorite football team
// (name, age, goals scored, yellow cards). You can find statistics online.

function Player(name, age, goals, yellCards){
	this.name = name;
	this.age = age;
	this.goals = goals;
	this.yellowCards = yellCards;
};

var Sadik = new Player ("Umar", "Sadik", 17, 0);
var Asano = new Player ("Takuma", "Asano", 6, 0);
console.log (Asano);

// TASK 3:

// Try to do the same thing as in the previous task, but when creating player objects try to do it dinammicaly
// (using loop). For that you'll need data in following format:
// var players = [["Player name", 27, 12, 4], ["Player name", 27, 12, 4], ["Player name", 27, 12, 4]];
// This array is just example, change data in this array with data of players you choose.

var players = [["Umar", "Sadik", 17, 0], ["Takuma", "Asano", 6, 0]];
function Player(name, age, goals, yellCards){
	this.name = name;
	this.age = age;
	this.goals = goals;
	this.yellowCards = yellCards;
};

for (i = 0; i < players.length; i++){
	var igrac[i] = new Player (players[i][0], players[i][1], players[i][2], players[i][3]);
};

console.log (igrac[0]);

// TASK 4:

// Create a construction function that should contain properties for first number, second number,
// and method. Then create a four instances of object from that constructor, each with different numbers, 
//and different method. First should have method for multiplying of its own numbers, second for dividing, 
//third for adding and fourth for subtracting.

// function Calc(a, b, sign){
// 	this.execute = function(){
// 		switch (sign){
// 			case "+" : return a+b;
// 			case "-" : return a-b;
// 			case "*" : return a*b;
// 			case "/" : return a/b;
// 			default : console.log ("operation unknown");
// 		};
// 	};
// };

// var score1 = new Calc(7, 8, "+");
// var score2 = new Calc(9, 10, "-");
// var score3 = new Calc(11, 12, "*");
// var score4 = new Calc(13, 14, "/");

// console.log (score1.execute() + " " + score2.execute() + " " + score3.execute() + " " + score4.execute());

//drugi nacin:

function Calc(a, b){
	this.a = a;
	this.b = b;
};

var score1 = new Calc(7, 8);
score1.execute = function(a, b){
	return this.a + this.b;
};
var score2 = new Calc(9, 10);
score2.execute = function(a, b){
	return this.a - this.b;
};
var score3 = new Calc(11, 12);
score3.execute = function(a, b){
	return this.a * this.b;
};
var score4 = new Calc(13, 14);
score4.execute = function(a, b){
	return this.a / this.b;
};

console.log (score1.execute() + " " + score2.execute() + " " + score3.execute() + " " + score4.execute());

// TASK 5:

// Test your understanding of closures and scope with following examples.

// IMPORTANT! - First read the task and try to give an answer, and then copy the code to your file and check what do you get in console.


//     QUESTION 1:

// 	What’s the result of executing this code and why?

//		function test() {
//		   console.log(a);
//		   console.log(foo());
		   
//		   var a = 1;
//		   function foo() {
//		      return 2;
//		   }
//		}

//		test();

// 			REZULTAT:
//			undefined (jer a jos nije definisano)
//			2 (funkcije se ucitavaju pre izvrsavanja)

// 	QUESTION 2:

// 	What is result?

		var a = 1; 

		function someFunction(number) {
		  function otherFunction(input) {
		    return a;
		  }
		  
		  a = 5;
		  
		  return otherFunction;
		}

		var firstResult = someFunction(9);
		var result = firstResult(2);
		console.log(a);

//                REZULTAT
//                firstResult === otherFunction(input){ return a; } (pozivanje funkcije bez zagrada vraca telo funkcije)
//                result === 5 (funkcija se izvrsava uzimajuci promenjenu vrednost a)

// 	QUESTION 3:

// 	What is the result of the following code? Explain your answer.

//		var fullname = 'John Doe';
//		var obj = {
//		   fullname: 'Colin Ihrig',
//		   prop: {
//		      fullname: 'Aurelio De Rosa',
//		      getFullname: function() {
//		         return this.fullname;
//		      }
//		   }
//		};

//		console.log(obj.prop.getFullname());

//		var test = obj.prop.getFullname;

//		console.log(test());

//                   REZULTAT
//                   Aurelio De Rosa (svojstvo objekta prop)
//                   John Doe (funkcija je postala samostalna, ne ponasa se kao metod objekta prop, this se odnosi na window)

// 	QUESTION 4:

// 	What will you see in the console for the following example?

		var a = 1; 
		function b() { 
		    a = 10; 
		    return; 
		    function a() {} 
		} 
		b(); 
		console.log(a);

//                    REZULTAT:
//                    U konzoli se ispisije 1; 


		

