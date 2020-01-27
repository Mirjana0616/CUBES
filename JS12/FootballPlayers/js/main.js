// ***** JS DOM HOMEWORK *****


// WHAT SHOULD YOU DO ?

// - Create a page displaying profiles of 15 players of your favorite football team


// PAGE STRUCTURE

// - Page should have a header on the top, containing team logo on the left of the header

// - Below the header there should be a team name

// - Below that there should be a section displaying first squad players (11 of them in total, 
// 4 players in a row)

// - Below that there should be section displaying reserve players

// - Each player profile should contain image, name, last name, player number, 

// position and age in following format:

// image

// Name: Ronaldinho
// Last name: Gaucho
// Number: 9
// Position: Forward
// Age: 27

// - Each time page reloads random 11 players should be selected for starting squad, 
// the rest of them should be in reserves


// FOLDER STRUCTURE

// - You should have main folder called FootballPlayers

// - Inside of that you should have index.html file, as well as css, js and images folders


// DATA STRUCTURE

// - There should be an object containing team data

// - It should contain team name, team logo path, and players properties

// - Players property should be an array of objects

// - Each object should contain single player data (Name, Last name, Number etc.)

var teamData = {
	teamName : "Partizan",
	teamLogoPath : "images/grb.png",
	playersProperties : [
		{
		name: "Aleksandar",
		lastName: "Šćekić",
		number: "19",
		position: "vezni",
		age: 29,
		path : "AleksandarScekic"
		},
		{
		name: "Djordje",
		lastName: "Ivanović",
		number: "18",
		position: "vezni",
		age: "25",
		path : "DjordjeIvanovic"
		},
		{
		name: "Dominik",
		lastName: "Dinga",
		number: "67",
		position: "odbrana",
		age: "22",
		path : "DominikDinga"
		},
		{
		name:"Igor",
		lastName: "Vujačić",
		number: "5",
		position: "odbrana",
		age: "26",
		path : "IgorVujacic"
		},
		{
		name: "Lazar",
		lastName: "Pavlović",
		number: "10",
		position: "vezni",
		age: "19",
		path : "LazarPavlovic"
		},
		{
		name: "Milan",
		lastName: "Smiljanić",
		number: "99",
		position: "vezni",
		age: "34",
		path : "MilanSmiljanic"
		},
		{
		name: "Nemanja",
		lastName: "Stevanović",
		number: "85",
		position: "golman",
		age: "28",
		path : "NemanjaStevanovic"
		},
		{
		name: "Saša",
		lastName: "Zdjelar",
		number: "16",
		position: "vezni",
		age: "25",
		path : "SasaZdjelar"
		},
		{
		name: "Sejduba",
		lastName: "Suma",
		number: "20",
		position: "vezni",
		age: "29",
		path : "SejdubaSuma"
		},
		{
		name: "Slobodan",
		lastName: "Stanojlović",
		number: "33",
		position: "vezni",
		age: "19",
		path : "SlobodanStanojlovic"
		},
		{
		name: "Slobodan",
		lastName: "Urošević",
		number: "72",
		position: "odbrana",
		age: "26",
		path : "SlobodanUrosevic"
		},
		{
		name: "Strahinja",
		lastName: "Pavlović",
		number: "3",
		position: "odbrana",
		age: "19",
		path : "StrahinjaPavlovic"
		},
		{
		name: "Takuma",
		lastName: "Asano",
		number: "11",
		position: "napadač",
		age: "26",
		path : "TakumaAsano"
		},
		{
		name: "Umar",
		lastName: "Sadik",
		number: "9",
		position: "napadač",
		age: "23",
		path : "UmarSadik"
		},
		{
		name: "Zoran",
		lastName: "Tošić",
		number: "7",
		position: "vezni",
		age: "33",
		path : "ZoranTosic"
		}
	]
}
// HOW PAGE SHOULD BE CONSTRUCTED

// - In the start in the HTML file you should have only container elements, like header, 
// main section and similar elements you may need

// !!! IMPORTANT !!!

// - All other elements, like logo, team name, and player profiles should be added from JS,
//  using data from existing team object


document.getElementsByTagName("header")[0].innerHTML = "<img src='" + teamData.teamLogoPath + "' align=left valign=top />";

var title = document.getElementById("tit");
var name = teamData.teamName.toUpperCase();
title.textContent = name;
title.style.fontSize = "60px"
title.style.fontWeight = "700";
title.style.marginLeft = "330px";
title.style.marginTop = "150px"

var sections = document.getElementsByTagName("section");
for (i = 0; i < sections.length; i++){
	sections[i].style.width = "1200px";
}

var divs = document.getElementsByTagName("div");
for (i = 0; i < divs.length; i++){
	divs[i].style.width = "300px";
	divs[i].style.float = "left";
	divs[i].style.marginTop = "100px";
}

var fs = document.createElement("span");
var fsText = document.createTextNode("First Squad");
fs.prepend(fsText);
document.getElementById("firstSquad").prepend(fs);

var rs = document.createElement("span");
var rsText = document.createTextNode("Reserve");
rs.prepend(rsText);
document.getElementById("reserve").prepend(rs);

var subtitles = document.getElementsByTagName("span");
subtitles[0].parentElement.style.position = "absolute";
subtitles[0].parentElement.style.marginTop = 350 + "px";
subtitles[0].style.position = "absolute";
//subtitles[0].style.marginTop = -50 + "px";
subtitles[0].style.fontSize = 30 + "px";

subtitles[1].parentElement.style.position = "absolute";
subtitles[1].parentElement.style.marginTop = 2000 + "px";
subtitles[1].style.position = "absolute";
//subtitles[1].style.marginTop = -50 + "px";
subtitles[1].style.fontSize = 30 + "px";

var random11 = [];
var random;
var repeating;

for (var i = 0; i <= 10; i++){
	random = Math.floor(Math.random()*15);
	for (var j = 0; j < i; j++){
	 	if (random === random11[j]){
	 		repeating = true;
	 		break;
	 	} else {
			repeating = false
		}
	 }
	 if (!repeating){
	 	random11[i] = random
	 } else {
	 	i--;
	 }
}

var rest4 = [];
var exist;
var n = 0;

for (var i = 0; i <= 14; i++){
	for (var j = 0; j <= 10; j++){
		if (random11[j] === i){
			exist = true;
			break;
		} else {
			exist = false;
		}
	}
	if (!exist){
		rest4[n++] = i;
	}
}

console.log(random11, rest4);

var c = document.getElementById("firstSquad").children;
var ch = document.getElementById("reserve").children;

function seting1(i){
	var text1 = "<img src='images/" + teamData.playersProperties[random11[i-1]].path + ".jpg' />"
	var text2 = "Name: " + teamData.playersProperties[random11[i-1]].name;
	var text3 = "Last Name: " + teamData.playersProperties[random11[i-1]].lastName;
	var text4 = "Number: " + teamData.playersProperties[random11[i-1]].number;
	var text5 = "Position: " + teamData.playersProperties[random11[i-1]].position;
	var text6 = "Age: " + teamData.playersProperties[random11[i-1]].age;
	c[i].firstChild.innerHTML = text1;
	c[i].children[1].innerHTML = text2;
	c[i].children[2].innerHTML = text3;
	c[i].children[3].innerHTML = text4;
	c[i].children[4].innerHTML = text5;
	c[i].lastChild.innerHTML = text6;
}

function seting2(i){
	var text1 = "<img src='images/" + teamData.playersProperties[rest4[i-1]].path + ".jpg' />"
	var text2 = "Name: " + teamData.playersProperties[rest4[i-1]].name;
	var text3 = "Last Name: " + teamData.playersProperties[rest4[i-1]].lastName;
	var text4 = "Number: " + teamData.playersProperties[rest4[i-1]].number;
	var text5 = "Position: " + teamData.playersProperties[rest4[i-1]].position;
	var text6 = "Age: " + teamData.playersProperties[rest4[i-1]].age;
	ch[i].firstChild.innerHTML = text1;
	ch[i].children[1].innerHTML = text2;
	ch[i].children[2].innerHTML = text3;
	ch[i].children[3].innerHTML = text4;
	ch[i].children[4].innerHTML = text5;
	ch[i].lastChild.innerHTML = text6;
}

function seting(){
	for (var i=1; i < c.length; i++){
		seting1(i)
	}
	for (var i=1; i < ch.length; i++){
		seting2(i)
	}
}
seting();


// BONUS - PLAYER SUBSTITUTION :)

// Each 60 seconds one random player from starting squad should be replaced with random player 
// from reserves

function change(){
	var fsNum = Math.floor(Math.random()*11);
	var resNum = Math.floor(Math.random()*4);
	var stored = random11[fsNum];
	random11[fsNum] = rest4[resNum];
	rest4[resNum] = stored;
	//console.log(fsNum, resNum, random11, rest4);
	seting1(fsNum + 1);
	seting2(resNum + 1);
}

var int = setInterval(change, 60000);