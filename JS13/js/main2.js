
// ***** JS DOM PRACTICE HOMEWORK *****


// WHAT SHOULD YOU DO ?

// - Create array containing 4 image paths

// - Create slider with those images, where only one is visible in the start

// - Every 5 secods next image should be displayed, by switching image position (move first image
//  in the last place by changing it's position in DOM)

// - Below the slider there should be list of slider thumbnails

// - Active image thumbnail should always be highlighted (have a border), change it when image is changed


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

var catpath = ["images/c1.jpg", "images/c2.jfif", "images/c3.jpg", "images/c4.jpeg"];
var sld = document.getElementById("slide").children;
var tmb = document.getElementById("thumbnails").children;

for (var i = 0; i < catpath.length; i++){
	sld[i].innerHTML = "<img src='" + catpath[i] +"' width = '800px' />";
	tmb[i].innerHTML = "<img src='" + catpath[i] +"' width = '120px' />";
}

sld[0].parentElement.style.marginLeft = "200px";
tmb[0].parentElement.style.marginLeft = "300px";
tmb[0].parentElement.style.marginTop = "40px";

sld[0].parentElement.style.display = "flex";
sld[0].parentElement.style.alignItems = "flex-end";
sld[0].parentElement.style.width = "800px";
sld[0].parentElement.style.overflowX = "scroll";
tmb[0].parentElement.style.display = "flex";
tmb[0].parentElement.style.alignItems = "flex-end";

for (var i = 0; i < catpath.length; i++){
	sld[i].style.position = "relative";
	sld[i].style.marginRight = "50px";
	tmb[i].style.marginRight = "20px";
}

var num = -1;
var margins = [];

// ATRIBUT width img-ova, i rightMargin div-ova u prvoj sekciji
// parseInt eliminise px i pretvara u integer:

console.log(parseInt(sld[0].children[0].getAttribute("width")), parseInt(sld[0].style.marginRight));

for (var i = 0; i < catpath.length; i++){
	margins[i] = i * (parseInt(sld[0].children[0].getAttribute("width")) + parseInt(sld[0].style.marginRight));
}

function settingContainer(){
 	num++;
 	if (num === 4){
 		num = 0;
 	}

 	sld[0].style.marginLeft = -margins[num] + "px";
 	
 	for (var i = 0; i < catpath.length; i++){
 		if (i !== num){
 			tmb[i].querySelector("img").style.borderWidth = 0; 
		} else {
 			tmb[i].querySelector("img").style.border = "5px solid blue";
 		}
 	}
}

settingContainer();
int = setInterval(settingContainer, 5000);

