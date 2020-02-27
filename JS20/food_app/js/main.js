
import * as variables from "./variables.js";

let {
	page,
	verification,
	answer,
	numOfPages,
	titles,
	images,
	ingred,
	healthLabels,
	calories,
	urls,
	rcn,
} = variables;

const ID = "8ca54d16";
const key = "4fad1ebb42bb29f8feb827bf1a1aca58";

document.querySelector(".loader").style.display = "none";
document.getElementsByClassName("search-button")[0].addEventListener("click", function(){
	request(1);
})

const request = pageNum => {
	document.querySelector(".loader").style.display = "flex";
	let newSearch = new Searching(pageNum);
	newSearch.verify();
	if (!verification) return;
	newSearch.fetching();
}

class Searching{
	constructor (pageNum){
		this.pageNum = pageNum;
		this.start = (this.pageNum - 1) * 10;
		this.end = this.start + 10;
		if (this.end > rcn && rcn !== 0) this.end = rcn;
		if (this.end <= this.start) return; 
		this.q = document.getElementsByClassName("keyword-input")[0].value;
		this.calMin = document.getElementById("calories-min").value;
		this.calMax = document.getElementById("calories-max").value;
		this.health = document.querySelectorAll("select")[0].value;
		this.diet = document.querySelectorAll("select")[1].value;
		this.searchUrl = "https://api.edamam.com/search?q=" + this.q + "&app_id=" + ID + "&app_key=" + key + "&from=" + this.start + "&to=" + this.end + "&calories=" + this.calMin + "-" + this.calMax + "&health=" + this.health + "&diet=" + this.diet;

	}
	verify(){
		if (!this.q || !this.health || !this.diet || !this.calMin || !this.calMax){
			verification = false;
			alert ("Please, fill all fields.");
		} else verification = true;
	}
	fetching(){
		console.log(this.searchUrl);
		fetch(this.searchUrl)
		.then(response => {
			return response.json();
		})
		.then(data => {
		 	answer = data;
		 	console.log(answer.more);
			getData()
		})
		.catch(error => console.log(error))
	}
}

const getData = () => {
	numOfPages = Math.ceil(answer.count/10);
	rcn = parseInt(answer.count);
    document.querySelector(".recipe-count-number").textContent = rcn;

	titles.splice(0, titles.lenth);
	images.splice(0, images.length);
	ingred.splice(0, ingred.length);
	healthLabels.splice(0, healthLabels.length);
	calories.splice(0,calories.length);
	urls.splice(0, urls.length);

	for (var i = 0; i < answer.hits.length; i++){
		titles[i] = answer.hits[i].recipe.label;
		images[i] = answer.hits[i].recipe.image;
		ingred[i] = answer.hits[i].recipe.ingredientLines;
		healthLabels[i] = answer.hits[i].recipe.healthLabels;
		calories[i] = answer.hits[i].recipe.calories.toFixed(0);
		urls[i] = answer.hits[i].recipe.url;
	};
	//console.log(recipesNum, titles, images, healthLabels, calories, urls);
	recipesGenerator();
}

const recipesGenerator = () => {
	document.querySelector("#recipes").innerHTML = "";

	for (let i = 0; i < titles.length; i++){ 
		let newElement = document.createElement("div");
		newElement.className = "recipe-element";
		newElement.innerHTML = "<a href ='" + urls[i] + "' target = '_blanck'><img src = " + images[i] + " /></a><h3>" + titles[i] + "</h3><p class = 'ingredients'></p><div class = 'calories'>" + calories[i] + "</div><div class = 'labels'></div>";
		newElement.getElementsByClassName("ingredients")[0].innerHTML = "<div>";
		if (ingred[i]){
			for (let j = 0; j < ingred[i].length; j++){
				newElement.getElementsByClassName("ingredients")[0].firstChild.innerHTML += "<p>" + ingred[i][j] + "</p>";
			}
			let toggleButton = document.createElement("button");
			toggleButton.textContent = "+";
			toggleButton.onclick = toggle;
			newElement.getElementsByClassName("ingredients")[0].appendChild(toggleButton);
		};
		if (healthLabels[i]){
			for (let j = 0; j < healthLabels[i].length; j++){
				newElement.getElementsByClassName("labels")[0].innerHTML += "<p class = 'label'>" + healthLabels[i][j] + "</p>";
			}
		}
	document.querySelector("#recipes").appendChild(newElement);
	}
	for (let i = 0; i < document.querySelectorAll(".ingredients").length; i++){
		document.querySelectorAll(".ingredients")[i].firstChild.style.display = "none";
	}
	var newFooter = new CreateFooter();
	newFooter.createSpans();
}

const toggle = event => {
	//console.log(event.target);
	if (event.target.textContent === "+"){
		event.target.textContent = "-";
		event.target.previousElementSibling.style.display = "block";
	} else {
		event.target.textContent = "+";
		event.target.previousElementSibling.style.display = "none";
	}
}


class CreateFooter{
	constructor(){
		this.footer = document.querySelector("footer");
		this.nStart = page;
		this.nEnd = this.nStart + 4;
	}
createSpans(){
		//alert(nStart + "," + nEnd);
		this.footer.style.visibility = "visible";
		this.footer.firstElementChild.style.visibility = "visible";
		this.footer.lastElementChild.style.visibility = "visible";

		if (this.nStart === 1) {
			this.footer.firstElementChild.style.visibility = "hidden";
		};
		if (this.numOfPages <= this.nEnd){
			this.nEnd = this.numOfPages;
			this.footer.lastElementChild.style.visibility = "hidden";
		}
		//alert (page + "," + numOfPages +"," + footer.children.length +"," + nStart+"," + nEnd);
		
		while(this.footer.children.length > 2){
			this.footer.removeChild(this.footer.children[1]);
		}
		//alert(footer.children.length);

		let counter = 0;
		for (let i = this.nStart; i <= this.nEnd; i++){
			let newElement = document.createElement("span");
			newElement.innerHTML = "&nbsp;" + i + "&nbsp;";
			newElement.setAttribute("id", i);
			i === page ? newElement.classList.add("current-page") : newElement.classList.remove("current-page");
			newElement.onclick = function (){
				page = parseInt(this.id);
				request(page);
			}
			counter++;
			//console.log(counter);
			this.footer.children[counter-1].after(newElement);
		};
		
		document.querySelector(".loader").style.display = "none";

		this.footer.firstChild.addEventListener("click", function(){
			let previous = parseInt(document.querySelector("footer").children[1].getAttribute("id")) - 1;
			if (previous > 0){
				page = previous;
				request(page);
			}
		});
		this.footer.lastChild.addEventListener("click", function(){
			let next = parseInt(document.querySelector("footer").lastElementChild.previousSibling.getAttribute("id")) + 1;
			if (next <= numOfPages){
				page = next;
				request(page);
			}
		});
	}
}

