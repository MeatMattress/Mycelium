
document.addEventListener("DOMContentLoaded", function() { 
	window.canvas = document.getElementById("canvas");
	window.ctx = canvas.getContext('2d');
	canvas.width = window.innerWidth *(9/10);
	canvas.height = window.innerHeight *(9/10);
	ctx.fillStyle="#000000";
	
	ctx.fillRect(0,0,canvas.width, canvas.height);
	//setup();
	var spore = new Spore(new PVector(canvas.width/2, canvas.height/2));
	spore.draw();

	colorList = ["#ff0000", "#ff0004", "#ff0008", "#ff000d", "#ff0011", "#ff0015", "#ff0019", "#ff001e", "#ff0022", "#ff0026", "#ff002b", "#ff002f", "#ff0033", "#ff0037", "#ff003c", "#ff0040", "#ff0044", "#ff0048", "#ff004c", "#ff0051", "#ff0055", "#ff0059", "#ff005d", "#ff0062", "#ff0066", "#ff006a", "#ff006f", "#ff0073", "#ff0077", "#ff007b", "#ff0080", "#ff0084", "#ff0088", "#ff008c", "#ff0090", "#ff0095", "#ff0099", "#ff009d", "#ff00a2", "#ff00a6", "#ff00aa", "#ff00ae", "#ff00b3", "#ff00b7", "#ff00bb", "#ff00bf", "#ff00c3", "#ff00c8", "#ff00cc", "#ff00d0", "#ff00d4", "#ff00d9", "#ff00dd", "#ff00e1", "#ff00e6", "#ff00ea", "#ff00ee", "#ff00f2", "#ff00f7", "#ff00fb", "#ff00ff", "#fb00ff", "#f700ff", "#f200ff", "#ee00ff", "#ea00ff", "#e600ff", "#e100ff", "#dd00ff", "#d900ff", "#d400ff", "#d000ff", "#cc00ff", "#c800ff", "#c300ff", "#bf00ff", "#bb00ff", "#b700ff", "#b300ff", "#ae00ff", "#aa00ff", "#a600ff", "#a200ff", "#9d00ff", "#9900ff", "#9500ff", "#9000ff", "#8c00ff", "#8800ff", "#8400ff", "#8000ff", "#7b00ff", "#7700ff", "#7300ff", "#6f00ff", "#6a00ff", "#6600ff", "#6200ff", "#5d00ff", "#5900ff", "#5500ff", "#5100ff", "#4c00ff", "#4800ff", "#4400ff", "#4000ff", "#3c00ff", "#3700ff", "#3300ff", "#2f00ff", "#2b00ff", "#2600ff", "#2200ff", "#1e00ff", "#1900ff", "#1500ff", "#1100ff", "#0d00ff", "#0800ff", "#0400ff", "#0000ff", "#0004ff", "#0008ff", "#000dff", "#0011ff", "#0015ff", "#0019ff", "#001eff", "#0022ff", "#0026ff", "#002aff", "#002fff", "#0033ff", "#0037ff", "#003cff", "#0040ff", "#0044ff", "#0048ff", "#004cff", "#0051ff", "#0055ff", "#0059ff", "#005eff", "#0062ff", "#0066ff", "#006aff", "#006fff", "#0073ff", "#0077ff", "#007bff", "#0080ff", "#0084ff", "#0088ff", "#008cff", "#0090ff", "#0095ff", "#0099ff", "#009dff", "#00a1ff", "#00a6ff", "#00aaff", "#00aeff", "#00b3ff", "#00b7ff", "#00bbff", "#00bfff", "#00c3ff", "#00c8ff", "#00ccff", "#00d0ff", "#00d5ff", "#00d9ff", "#00ddff", "#00e1ff", "#00e6ff", "#00eaff", "#00eeff", "#00f2ff", "#00f7ff", "#00fbff", "#00ffff", "#00fffb", "#00fff7", "#00fff2", "#00ffee", "#00ffea", "#00ffe6", "#00ffe1", "#00ffdd", "#00ffd9", "#00ffd5", "#00ffd0", "#00ffcc", "#00ffc8", "#00ffc3", "#00ffbf", "#00ffbb", "#00ffb7", "#00ffb3", "#00ffae", "#00ffaa", "#00ffa6", "#00ffa1", "#00ff9d", "#00ff99", "#00ff95", "#00ff90", "#00ff8c", "#00ff88", "#00ff84", "#00ff80", "#00ff7b", "#00ff77", "#00ff73", "#00ff6f", "#00ff6a", "#00ff66", "#00ff62", "#00ff5e", "#00ff59", "#00ff55", "#00ff51", "#00ff4c", "#00ff48", "#00ff44", "#00ff40", "#00ff3c", "#00ff37", "#00ff33", "#00ff2f", "#00ff2a", "#00ff26", "#00ff22", "#00ff1e", "#00ff19", "#00ff15", "#00ff11", "#00ff0d", "#00ff08", "#00ff04", "#00ff00", "#04ff00", "#09ff00", "#0dff00", "#11ff00", "#15ff00", "#1aff00", "#1eff00", "#22ff00", "#26ff00", "#2bff00", "#2fff00", "#33ff00", "#37ff00", "#3cff00", "#40ff00", "#44ff00", "#48ff00", "#4dff00", "#51ff00", "#55ff00", "#59ff00", "#5eff00", "#62ff00", "#66ff00", "#6aff00", "#6fff00", "#73ff00", "#77ff00", "#7bff00", "#80ff00", "#84ff00", "#88ff00", "#8cff00", "#91ff00", "#95ff00", "#99ff00", "#9dff00", "#a2ff00", "#a6ff00", "#aaff00", "#aeff00", "#b3ff00", "#b7ff00", "#bbff00", "#bfff00", "#c3ff00", "#c8ff00", "#ccff00", "#d0ff00", "#d4ff00", "#d9ff00", "#ddff00", "#e1ff00", "#e5ff00", "#eaff00", "#eeff00", "#f2ff00", "#f6ff00", "#fbff00", "#ffff00", "#fffb00", "#fff700", "#fff200", "#ffee00", "#ffea00", "#ffe600", "#ffe100", "#ffdd00", "#ffd900", "#ffd400", "#ffd000", "#ffcc00", "#ffc800", "#ffc300", "#ffbf00", "#ffbb00", "#ffb700", "#ffb300", "#ffae00", "#ffaa00", "#ffa600", "#ffa100", "#ff9d00", "#ff9900", "#ff9500", "#ff9000", "#ff8c00", "#ff8800", "#ff8400", "#ff8000", "#ff7b00", "#ff7700", "#ff7300", "#ff6f00", "#ff6a00", "#ff6600", "#ff6200", "#ff5d00", "#ff5900", "#ff5500", "#ff5100", "#ff4c00", "#ff4800", "#ff4400", "#ff4000", "#ff3c00", "#ff3700", "#ff3300", "#ff2f00", "#ff2b00", "#ff2600", "#ff2200", "#ff1e00", "#ff1900", "#ff1500", "#ff1100", "#ff0d00", "#ff0800", "#ff0400"]	

	
	for (var i=0; i<300; i++) {
		growBranch(spore, 50, 10); // starting point, amount of vectors in the branch, magnitude of each vector. Play around with these.
	}
});

function randomBranch(spore, magnitude) {
	var angle = Math.random()*Math.PI*2;
	var x = Math.cos(angle)*magnitude + spore.p.x;
	var y = Math.sin(angle)*magnitude + spore.p.y;
	var newBranch = new Branch(spore.p, new PVector(x,y));
	return newBranch;
}

function randomInt(min, max) { // gets a random number between min and max (height and width, usually)
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function getRandomFloat(min, max) {
	return Math.random() * (max - min) + min;
}

function growBranch(spore, length, magnitude) {
	length = length || randomInt(20, 50); // amount of vectors in a branch
	var currentVector = randomBranch(spore, magnitude);

	currentVector.draw(colorList[0]);

	var numColors = parseInt(colorList.length / length);
	var currentColorIndex = numColors;

	for (var i=0; i<length; i++) {
		//var p1 = findPartWay(currentVector, getRandomFloat(0.30, 0.70));
		var p1 = currentVector.p2;
		var p2 = createNewVector(currentVector, p1, 8, magnitude, getQuadrant(getAngle(currentVector)));

		var branch = new Branch(p1, p2);
		branch.draw(colorList[currentColorIndex]);
		currentVector = branch;
		currentColorIndex += numColors;
	}
	
}

function findPartWay(vector, scalar) {
	var distX = vector.p2.x - vector.p1.x;
	var distY = vector.p2.y - vector.p1.y;

	var modX = (distX * scalar) + vector.p1.x;
	var modY = (distY * scalar) + vector.p1.y;

	return new PVector(modX, modY);
}


function GETANGLE(cx, cy, ex, ey) {
	var dy = ey - cy;
	var dx = ex - cx;
	var theta = Math.atan2(dy, dx); // range (-PI, PI]
	theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
	if (theta < 0) theta = 360 + theta; // range [0, 360)
	return Math.abs(theta);
}

function getAngle(vector) {
	return subtractAngle(360, Math.floor(GETANGLE(vector.p1.x, vector.p1.y, vector.p2.x, vector.p2.y)));
}

var addAngle = function (angle1, angle2) { // Finds the sum of two angles
	if (angle1 + angle2 > 360) {
		return (angle1 + angle2) - 360;
	} else {
		return angle1 + angle2;
	}
}

var subtractAngle = function (angle1, angle2) { // Finds the difference between two angles
	if (angle1 - angle2 < 0) {
		return 360 - Math.abs(angle1 - angle2);
	} else {
		return angle1 - angle2;
	}
}

function createNewVector(vector1, p1, angle, magnitude, q) {
	vector1_angle = getAngle(vector1);
	a1 = subtractAngle(vector1_angle, angle);
	a2 = addAngle(vector1_angle, angle);
	min = -angle;
	max = angle;
	rand_int = randomInt(min, max);
	random_angle = addAngle(vector1_angle, rand_int);
	theta = random_angle
	var x, y = 0;
	switch (q) {
		case 1:
			x = p1.x + magnitude * Math.cos(Math.PI * theta / 180.0);
			y = p1.y - magnitude * Math.sin(Math.PI * theta / 180.0);
			break;
		case 2:
			x = p1.x + magnitude * Math.cos(Math.PI * theta / 180.0);
			y = p1.y - magnitude * Math.sin(Math.PI * theta / 180.0);
			break;
		case 3:
			x = p1.x + magnitude * Math.cos(Math.PI * theta / 180.0);
			y = p1.y - magnitude * Math.sin(Math.PI * theta / 180.0);
			break;

		case 4:
			x = p1.x + magnitude * Math.cos(Math.PI * theta / 180.0);
			y = p1.y - magnitude * Math.sin(Math.PI * theta / 180.0);
			break;

		default:
			break;
	}

	//console.log(`vector angle ${vector1_angle} min ${min} max ${max} rand_int ${rand_int} random ${random_angle} distance ${distance(p1, new PVector(x,y))}`);
	return new PVector(x, y);
}

function distance(PVector1, PVector2) {
	return (PVector2.y - PVector1.y) / (PVector2.x - PVector1.x);
}

function getQuadrant(angle) {
	q = 0
	if (angle >= 0 && angle <= 90) { //first quad
		q = 1
	} else if (angle > 90 && angle <= 180) { //second quad
		q = 2
	} else if (angle > 180 && angle <= 270) { //third
		q = 3
	} else if (angle > 270 && angle <= 360) { // fourth
		q = 4
	}
	return q;
}