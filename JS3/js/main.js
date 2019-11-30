

// TASK 1

var dataOld = [34, true, "Peter", 1992];
var dataNew = [];
var i = 0;

while(i< dataOld.length){
	dataNew[i]= dataOld[i];
	i++;
};
console.log(dataNew);

// TASK 2

var dataOld = [34, true, "Peter", 1992];
var dataNew = [];
var i = 0;

while(i< dataOld.length){
	dataNew[i] = dataOld[dataOld.length -1 -i];
	i++;
};
console.log(dataNew);

// TASK 2.1

var dataOld = [34, true, "Peter", 1992];
var dataNew = [];
var i = dataOld.length -1;

while(i >= 0){
	dataNew[dataOld.length -1 -i] = dataOld[i];
	i--;
};
console.log(dataNew);


// TASK 3


var dataOld = [34, true, "Peter", 1992];
var dataNew = [12, "Jack"];
var startAt = dataNew.length;
var i = 0;

while(i < dataOld.length){
	dataNew [startAt + i] = dataOld[i];
	i++;
};
console.log(dataNew);

// TASK 4

var a = [12, 56, 32, 44, 69];
var b = [88, 7, 13];
var c = new Array;
var i = 0;

while(i < (a.length + b.length)){
	while(i < a.length){
		c[i] = a[i];
		i++;
	};
	c[i] = b[i - a.length];
	i++;	
};
console.log(c);

// TASK 5

var a = [12, 56, 32, 44];
var b = [88, 7, 13 ];
var c = new Array;
var j = 0


for(var i = 0; i < (a.length + b.length); i+=2){
	if (j < a.length){
		c[i] = a[j]
	} else{
		i-=1
	};
	if (j < b.length){
		c[i+1] = b[j]
	} else{
		i-=1
	};
	j++;
};
console.log(c);

//TASK 6

var zvezdice = "" ;

for(var i = 1; i <= 6; i++){
	zvezdice = zvezdice + "*";
	console.log(zvezdice);
};

// TASK 7

var horizontala = "**********";
var vertikala = "*        *";

console.log(horizontala);
console.log(vertikala);
console.log(vertikala);
console.log(vertikala);
console.log(vertikala);

/*for(var i = 1; i <= 4; i++){
	console.log(vertikala);
};*/
console.log(horizontala);