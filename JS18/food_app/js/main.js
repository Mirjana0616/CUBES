// WHAT SHOULD YOU DO ?

// Use provided app structure in order to create an app that will search Food recipes. 

// API you should use is https: //developer.edamam.com (you have to register).

// You will need both, app_id and app_key, as per documentation. 
// app_id should be before app_key when used in URL.

// TASK 1:

// Add fields for calories range (min and max calories), as per API documentation.

// TASK 2:

// Each time when you fetch results you get 10 results by default, as well as
// info how many results in total there are. 

// Add pagination, so in the bottom of the page you have results pages like:

// 1 2 3 4 5 etc.

// When you switch to some other page you should send request and get results for that page.

// Check API documentation in order to find out how to get range of results (from and to).

//EDAMAM
//Application ID:
var ID = "8ca54d16"
//Application Key:
var key = "4fad1ebb42bb29f8feb827bf1a1aca58"
//URL example:
//"https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free"


var recipeRequest = new XMLHttpRequest;
recipeRequest.onload = getData;
recipeRequest.onerror = function() {alert("Please, try again.")};
var page = 1;
document.querySelector(".loader").style.display = "none";
document.getElementsByClassName("search-button")[0].addEventListener("click", function(){
	searching(1);
})

function searching(pageNum){
	var start = (pageNum - 1) * 10;
	var end = start + 10;
	if (end > rcn && rcn !== 0) end = rcn;
	if (end <= start) return; 
	var q = document.getElementsByClassName("keyword-input")[0].value;
	var calMin = document.getElementById("calories-min").value;
	var calMax = document.getElementById("calories-max").value;
	var health = document.querySelectorAll("select")[0].value;
	var diet = document.querySelectorAll("select")[1].value;
	if (!q || !health || !diet || !calMin || !calMax) {
		alert ("Please, fill all fields.");
		return
	}
	var searchUrl = "https://api.edamam.com/search?q=" + q + "&app_id=" + ID + "&app_key=" + key + "&from=" + start + "&to=" + end + "&calories=" + calMin + "-" + calMax + "&health=" + health + "&diet=" + diet;
	openAndSend(searchUrl);
}

function openAndSend(searchUrl){
	document.querySelector(".loader").style.display = "flex";
	recipeRequest.open("get", searchUrl);
	recipeRequest.send()
}

var numOfPages;
var titles = [];
var images = [];
var ingred = [];
var healthLabels = [];
var calories = [];
var urls = [];
var rcn = 0;

function getData(){
	var answer = JSON.parse(recipeRequest.responseText);
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

function recipesGenerator(){
	document.querySelector("#recipes").innerHTML = "";

	for (var i = 0; i < titles.length; i++){ 
		var newElement = document.createElement("div");
		newElement.className = "recipe-element";
		newElement.innerHTML = "<a href ='" + urls[i] + "' target = '_blanck'><img src = " + images[i] + " /></a><h3>" + titles[i] + "</h3><p class = 'ingredients'></p><div class = 'calories'>" + calories[i] + "</div><div class = 'labels'></div>";
		newElement.getElementsByClassName("ingredients")[0].innerHTML = "<div>";
		if (ingred[i]){
			for (j = 0; j < ingred[i].length; j++){
				newElement.getElementsByClassName("ingredients")[0].firstChild.innerHTML += "<p>" + ingred[i][j] + "</p>";
			}
			var toggleButton = document.createElement("button");
			toggleButton.textContent = "+";
			toggleButton.onclick = toggle;
			newElement.getElementsByClassName("ingredients")[0].appendChild(toggleButton);
		};
		if (healthLabels[i]){
			for (j = 0; j < healthLabels[i].length; j++){
				newElement.getElementsByClassName("labels")[0].innerHTML += "<p class = 'label'>" + healthLabels[i][j] + "</p>";
			}
		}
	document.querySelector("#recipes").appendChild(newElement);
	}
	for (var i = 0; i < document.querySelectorAll(".ingredients").length; i++){
		document.querySelectorAll(".ingredients")[i].firstChild.style.display = "none";
		console.log(document.querySelectorAll(".ingredients")[i]);
	}
	createFooter();
}

function toggle(event){
	//console.log(event.target);
	if (event.target.textContent === "+"){
		event.target.textContent = "-";
		event.target.previousElementSibling.style.display = "block";
	} else {
		event.target.textContent = "+";
		event.target.previousElementSibling.style.display = "none";
	}
}
function createFooter(){
	var footer = document.querySelector("footer");
	footer.style.visibility = "visible";
	var nStart = page;
	var nEnd = nStart + 4;
	//alert(nStart + "," + nEnd);

	footer.firstElementChild.style.visibility = "visible";
	footer.lastElementChild.style.visibility = "visible";

	if (nStart === 1) {
		footer.firstElementChild.style.visibility = "hidden";
	};
	if (numOfPages <= nEnd){
		nEnd = numOfPages;
		footer.lastElementChild.style.visibility = "hidden";
	}
	//alert (page + "," + numOfPages +"," + footer.children.length +"," + nStart+"," + nEnd);
	
	while(footer.children.length > 2){
		footer.removeChild(footer.children[1]);
	}
	//alert(footer.children.length);

	var counter = 0;
	for (var i = nStart; i <= nEnd; i++){
		var newElement = document.createElement("span");
		newElement.innerHTML = "&nbsp;" + i + "&nbsp;";
		newElement.setAttribute("id", i);
		i === page ? newElement.classList.add("current-page") : newElement.classList.remove("current-page");
		newElement.onclick = function (){
			page = parseInt(this.id);
			searching(page);
		}
		counter++;
		//console.log(counter);
		footer.children[counter-1].after(newElement);
	};
	
	document.querySelector(".loader").style.display = "none";

	footer.firstChild.addEventListener("click", function(){
		var previous = parseInt(footer.firstChild.nextSibling.getAttribute("id")) - 1;
		if (previous > 0){
			page = previous;
			searching(page);
		}
	});
	footer.lastChild.addEventListener("click", function(){
		var next = parseInt(footer.lastChild.previousSibling.getAttribute("id")) + 1;
		if (next <= numOfPages){
			page = next;
			searching(page);
		}
	});
}
