

const teamData = {
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


document.getElementsByTagName("header")[0].innerHTML = "<img src='" + teamData.teamLogoPath + "' align=left valign=top />";

const title = document.getElementById("tit");
const name = teamData.teamName.toUpperCase();
title.textContent = name;
title.style.fontSize = "60px"
title.style.fontWeight = "700";
title.style.marginLeft = "330px";
title.style.marginTop = "150px"

const sections = document.getElementsByTagName("section");
for (i = 0; i < sections.length; i++){
	sections[i].style.width = "1200px";
}

const divs = document.getElementsByTagName("div");
for (i = 0; i < divs.length; i++){
	divs[i].style.width = "300px";
	divs[i].style.float = "left";
	divs[i].style.marginTop = "100px";
}

const fs = document.createElement("span");
const fsText = document.createTextNode("First Squad");
fs.prepend(fsText);
document.getElementById("firstSquad").prepend(fs);

const rs = document.createElement("span");
const rsText = document.createTextNode("Reserve");
rs.prepend(rsText);
document.getElementById("reserve").prepend(rs);

const subtitles = document.getElementsByTagName("span");
let {parentElement} = subtitles[0];
parentElement.style.position = "absolute";
parentElement.style.marginTop = 350 + "px";
subtitles[0].style.position = "absolute";
//subtitles[0].style.marginTop = -50 + "px";
subtitles[0].style.fontSize = 30 + "px";

parentElement = subtitles[1].parentElement;
parentElement.style.position = "absolute";
parentElement.style.marginTop = 2000 + "px";
subtitles[1].style.position = "absolute";
//subtitles[1].style.marginTop = -50 + "px";
subtitles[1].style.fontSize = 30 + "px";

let random11 = [];
let random;
let repeating;

for (let i = 0; i <= 10; i++){
	random = Math.floor(Math.random()*15);
	for (let j = 0; j < i; j++){
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

let rest4 = [];
let exist;
let n = 0;

for (let i = 0; i <= 14; i++){
	for (let j = 0; j <= 10; j++){
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

const c = document.getElementById("firstSquad").children;
const ch = document.getElementById("reserve").children;

const seting1 = i => {
	let text1 = "<img src='images/" + teamData.playersProperties[random11[i-1]].path + ".jpg' />"
	let text2 = "Name: " + teamData.playersProperties[random11[i-1]].name;
	let text3 = "Last Name: " + teamData.playersProperties[random11[i-1]].lastName;
	let text4 = "Number: " + teamData.playersProperties[random11[i-1]].number;
	let text5 = "Position: " + teamData.playersProperties[random11[i-1]].position;
	let text6 = "Age: " + teamData.playersProperties[random11[i-1]].age;
	c[i].firstChild.innerHTML = text1;
	c[i].children[1].innerHTML = text2;
	c[i].children[2].innerHTML = text3;
	c[i].children[3].innerHTML = text4;
	c[i].children[4].innerHTML = text5;
	c[i].lastChild.innerHTML = text6;
}

const seting2 = i => {
	let text1 = "<img src='images/" + teamData.playersProperties[rest4[i-1]].path + ".jpg' />"
	let text2 = "Name: " + teamData.playersProperties[rest4[i-1]].name;
	let text3 = "Last Name: " + teamData.playersProperties[rest4[i-1]].lastName;
	let text4 = "Number: " + teamData.playersProperties[rest4[i-1]].number;
	let text5 = "Position: " + teamData.playersProperties[rest4[i-1]].position;
	let text6 = "Age: " + teamData.playersProperties[rest4[i-1]].age;
	ch[i].firstChild.innerHTML = text1;
	ch[i].children[1].innerHTML = text2;
	ch[i].children[2].innerHTML = text3;
	ch[i].children[3].innerHTML = text4;
	ch[i].children[4].innerHTML = text5;
	ch[i].lastChild.innerHTML = text6;
}

const seting = () => {
	for (let i=1; i < c.length; i++){
		seting1(i);
	}
	for (let i=1; i < ch.length; i++){
		seting2(i);
	}
}

seting();


const change = () => {
	let fsNum = Math.floor(Math.random()*11);
	let resNum = Math.floor(Math.random()*4);
	let stored = random11[fsNum];
	random11[fsNum] = rest4[resNum];
	rest4[resNum] = stored;
	//console.log(fsNum, resNum, random11, rest4);
	seting1(fsNum + 1);
	seting2(resNum + 1);
}

const int = setInterval(change, 60000);