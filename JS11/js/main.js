// ***** JS BOM HOMEWORK *****


// WHAT SHOULD YOU DO ?

// TASK 1

// Create a function that will ALERT if browser is online or not.

onoroff = function(){
  navigator.onLine ? alert("You are online.") : alert("You are ofline.");
}

onoroff();

// TASK 2

// Create a function that should, when run, reload the page.

// rld = function(){
//   location.reload();
// }

// rld();

// TASK 3


// Create a function that should, 3 seconds after page is loaded, redirect you to google.com, ad then, 
// 3 seconds after that take you back to your page. (Comment out your code once you're done so you can continue 
// with the other tasks, as this will cause infinite loop).

// rld = function(){

//   console.log("back");
//   history.back();
// }

// redirect = function(){
//   setTimeout(rld, 3000);
//   location.assign ("https://www.google.com");
// }

// setTimeout(redirect, 3000);

// TASK 4

// Crete a function that should every second console log a number incremented by one. 
// When number reach 15 it should stop running.

var num = 1;

var count = function(){
  console.log(num++);
  if (num === 16){
    clearInterval(stop);
  }
}

var stop = setInterval(count, 1000);

// TASK 5

// Create a function that should return a random number (round number) between 0 and 10,
// every time you run it.

var rnd = function(){
  console.log(Math.floor(Math.random()*11));
}

rnd();

// for (var i = 0; i < 20; i++){
//   rnd();
// }
// TASK 6

//   STEP 1
//       Create an array of objects, containing at least 5 users. Each of them should have name, 
//       age and status. Status should be "inactive" for each of them.

//   STEP 2
//       Once page is loaded it should display a popup where user can enter his name.
//       Once it's done name user entered should be compared against existing users.

//       If it doesn't match any user you should console log message: 

//           "User with name " + name + " doesn't exist."

//       If it match some of users, object with that user's data should be copied from array. 
//       It's status should be changed to "active", and it should be saved in local storage using 
//       "loggedInUser" as a key.

//   STEP 3
//       After one minute user's data should be removed from local storage.

//       You should console log a message that user is logged out.

var users = [
  {name : "Pera", age : 20, status : "inactive"},
  {name : "Mika", age : 21, status : "inactive"},
  {name : "Laza", age : 22, status : "inactive"},
  {name : "Vuk", age : 24, status : "inactive"},
  {name : "Djordje", age : 25, status : "inactive"}
];

var name = prompt("What's your name ?");
var exist;

for (i = 0; i < users.length; i++){
  if (users[i].name === name){
    var user = users[i];
    user.status = "active";
    localStorage.setItem("loggedInUser", user.name); // console.log(localStorage.getItem("loggedInUser"));
    exist = true;
  }
}

if (!exist){
  console.log("User with name " + name + " doesn't exist.");
}

clr = function(){
  localStorage.clear();
  console.log(name.concat(" is logged out."));
}

if (exist){
  setTimeout(clr, 60000);
}

