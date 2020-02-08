// ***** JS EVENTS HOMEWORK *****


// WHAT SHOULD YOU DO ?

// - Create a page which should contain search field in the top

// - Once page is loaded it should have list of at least 12 movies

// - Each movie should have image and a name (should be contained in array of objects)

// - Once you type something in the search field,
// it should filter movies by name, and display only movies that match

// BONUS:

// Add remove icon to each movie. When icon is clicked, movie should be removed from the list


var movies = [
	{
		name: "A-Clockwork-Orange-1971",
		poster: "A-Clockwork-Orange-1971"
	},
	{
		name: "Blade-Runner-1982",
		poster: "Blade-Runner-1982"
	},
	{
		name: "Casablanca-1942",
		poster: "Casablanca-1942"
	},
	{
		name: "Covek-sa-filmskom-kamerom-1929",
		poster: "Covek-sa-filmskom-kamerom-1929"
	},
	{
		name: "Putovanje-na-Mars-1926",
		poster: "Putovanje-na-Mars-1926"
	},
	{
		name: "Singing-in-the-rain-1952",
		poster: "Singing-in-the-rain-1952"
	},
	{
		name: "Star-wars-1977",
		poster: "Star-wars-1977"
	},
	{
		name: "Taxi-Driver-1976",
		poster: "Taxi-Driver-1976"
	},
	{
		name: "The-Driver-1978",
		poster: "The-Driver-1978"
	},
	{
		name: "Vertigo-1958",
		poster: "Vertigo-1958"
	},
	{
		name: "What-a-Way-to-Go-1964",
		poster: "What-a-Way-to-Go-1964"
	},
	{
		name: "Metropolis-1927",
		poster: "Metropolis-1927"
	}
]

for (var i = 0; i < movies.length; i++){
	var nm = movies[i].name;
	nm = nm.replace(/-/g, " ");
	var toChange = nm.lastIndexOf(" ");
	var nm1 = nm.substring (0, toChange);
	var nm2 = nm.substring(toChange);
	movies[i].name = nm1 + "," + nm2;
}

function createList(){
	document.getElementById("list").innerHTML = "";
	for (var i = 0; i < movies.length; i++){
		document.getElementById("list").innerHTML += "<div><p>" + movies[i].name + "</p><p id= '" + i + "'></p></div>"
	}
}

createList();

function createTitle(){
	var newElement = document.createElement("h3");
	document.getElementById("list").prepend(newElement);
}

createTitle()
console.log(document.getElementsByTagName("h3")[0]);
function writeTitle(){
	document.getElementsByTagName("h3")[0].textContent = storedMovie;
}

function createIcons(){
	var listChilds = document.getElementById("list").children;

	for (var i = 1; i < listChilds.length; i++){
		listChilds[i].style.display = "flex";
		listChilds[i].style.margin = "0px";
		listChilds[i].lastChild.innerText = "ukloni";
		listChilds[i].lastChild.style.margin = "0px 0px 0px 50px";
		listChilds[i].lastChild.style.padding = "0px 10px";
		listChilds[i].lastChild.style.height = "20px";
		listChilds[i].lastChild.style.backgroundColor = "rgba(181, 179, 105, .5)";
		listChilds[i].lastChild.onclick = rem;
	}
}

createIcons();

var sf = document.querySelector("input");
sf.addEventListener("change", srch);

var storedMovie = "";

function srch(event){
	for (var i = 0; i < movies.length; i++){
		storedMovie = movies[i].name.toUpperCase();
		var wantedMovie = event.target.value.toUpperCase();
		wantedMovie = wantedMovie.trim();
		if (storedMovie.indexOf(wantedMovie)  > -1){
			document.querySelector("#displayimage").setAttribute("src", "images/" + movies[i].poster + ".jpg");
			writeTitle();
			return;
		}
	}
}

function rem(event){
	var i =	event.target.getAttribute("id");
	movies.splice(i, 1);
	createList();
	createTitle();
	writeTitle();
	createIcons();
}
