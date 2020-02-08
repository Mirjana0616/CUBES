
var searchButton = document.getElementsByTagName("button")[0];
var searchInput = document.getElementsByTagName("input")[0];
var list = document.getElementById("list");
var displayVideo = document.getElementById("displayvideo");

var key = "AIzaSyDDjgvDfT4MltyClI0FI-ahFcQ0R47adL8";

var videoRequest = new XMLHttpRequest;

videoRequest.onload = function(){
	generateList();
}

searchButton.addEventListener("click", newSearch);
searchInput.addEventListener("change", newSearch);

function newSearch(){
	var searchValue = searchInput.value;
	var searchUrl = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=" + searchValue + "&key=" + key;
	openAndSend(searchUrl);
}

function openAndSend(searchUrl){
	videoRequest.open("get", searchUrl);
	videoRequest.send();	
}


var items = [];

function generateList(){
	items = JSON.parse(videoRequest.responseText).items;
	console.log(JSON.parse(videoRequest.responseText));
	list.children[0].innerHTML = "";
	list.children[1].innerHTML = "";
	
	for (var i = 0; i < items.length; i++){
	
		var newElement = document.createElement("div");
		var theNewestElement = document.createElement("div");

		newElement.innerHTML = "<img height = '130' width = '250' src ='" + items[i].snippet.thumbnails.default.url + "' />";
		newElement.style.margin = "0 0 30px";
		theNewestElement.innerHTML = "<h3>" + items[i].snippet.title + "</h3>";
		theNewestElement.innerHTML += "<p>" + items[i].snippet.description.substring(0, 130) + "...</p>";

		theNewestElement.style.height = 164 + "px";
		theNewestElement.style.width = 250 + "px";
		theNewestElement.style.marginLeft = 30 + "px";

		newElement.querySelector("img").className = i;
		theNewestElement.querySelector("h3").className = i;

		list.firstElementChild.appendChild(newElement);
		list.lastElementChild.appendChild(theNewestElement);
	};
	for (var i = 0; i < items.length; i++){
		list.children[0].children[i].querySelector("img").addEventListener("click", function(){
			loading(this.className)
		})
		list.children[1].children[i].querySelector("h3").addEventListener("click", function(){
			loading(this.className)
		})
	}
}

function loading(i){
	document.querySelector("iframe").setAttribute("src", "https://www.youtube.com/embed/" + items[i].id.videoId);
	var searchUrl = "https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=" + items[i].id.videoId + "&type=video&key=" + key;
	openAndSend(searchUrl);	
	
}
