
// ***** JS DOM PRACTICE HOMEWORK *****


// WHAT SHOULD YOU DO ?

// - Create array containing 4 image paths

// - Create slider with those images, where only one is visible in the start

// - Every 5 secods next image should be displayed, by switching image position (move first image
//  in the last place by changing it's position in DOM)

// - Below the slider there should be list of slider thumbnails

// - Active image thumbnail should always be highlighted (have a border), change it when image is changed

var catpath = ["images/c1.jpg", "images/c2.jfif", "images/c3.jpg", "images/c4.jpeg"];
var sld = document.getElementById("slide").children;
var tmb = document.getElementById("thumbnails").children;

tmb[0].style.marginTop = "230px";
tmb[1].style.marginTop = "200px";
tmb[2].style.marginTop = "90px";

for (var i = 0; i < catpath.length; i++){
	sld[i].innerHTML = "<img src='" + catpath[i] +"' width = '800px' />";
	tmb[i].innerHTML = "<img src='" + catpath[i] +"' width = '180px' />";
	if (i < (catpath.length - 1)) {
		tmb[i].style.float = "left";
		tmb[i].style.marginRight = "40px"
	}
}

sld[0].parentElement.style.marginTop = "20px";
sld[0].parentElement.style.marginLeft = "200px";
tmb[0].parentElement.style.marginTop = "20px";
tmb[0].parentElement.style.marginLeft = "200px";

var num = -1;

function setting(){

	num++;
	if (num === 4) num = 0;

	for (var i = 0; i < catpath.length; i++){
		if (i !== num){
			sld[i].style.display = "none";
			tmb[i].querySelector("img").style.borderWidth = 0; 
		} else {
			sld[i].style.display = "block";
			tmb[i].querySelector("img").style.border = "5px solid blue";
		}
	}
}

setting();

var int = setInterval (setting, 5000);

// BONUS:

// - Make it possible to change images by sliding it, not only switching

// - Images whould be in parent element, all in same row (use flexbox), but only one should be visible,
// the rest should be hidden with overflow

// - Every 5 seconds the whole parent element should move to the left by the value of single image width.
// You can do this by changing it's margin

// - Once parent element moved to the left, you can move first image to the last place in parent
// (DOM position), so the current one is the first one. At this moment you would need to reset margin
// on parent element too

// - Here you should also have thumbnails, and change active one each time image is changed


// SAVE PREVIOUS BEHAVIOR TOO, JUST COMMENT IT OUT, SO YOU HAVE FUNCIONS FOR BOTH, SWITCHING AND SLIDING!

