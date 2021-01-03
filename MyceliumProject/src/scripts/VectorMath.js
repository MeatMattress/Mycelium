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

function randomFloat(min, max) {
	return Math.random() * (max - min) + min;
}

function randomRadius(min, max){
		return randomInt(min, max);
	}

function randomvector(width, height){ // calculate random vector between canvas width and height (with a 10px buffer on each side)
		var x = randomInt(10, width - 10);
		var y = randomInt(10, height - 10);
		return new PVector(x, y); // default random vector generates vector between height and width of canvas
	}

function growBranch(spore, length, magnitude) {
	length = length || randomInt(20, 50); // amount of vectors in a branch
	var currentVector = randomBranch(spore, magnitude);

	currentVector.draw(colorList[0]);

	var numColors = parseInt(colorList.length / length);
	var currentColorIndex = numColors;

	for (var i=0; i<length; i++) {
		//var p1 = findPartWay(currentVector, randomFloat(0.30, 0.70));
		var p1 = currentVector.p2;
		var p2 = createNewVector(currentVector, p1, 10, magnitude, getQuadrant(getAngle(currentVector)));

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

function getMousePos(e, canvas) {
	var rect = canvas.getBoundingClientRect();
	return new PVector(e.clientX - rect.left, e.clientY - rect.top);
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

function distance(PVector1, PVector2) {
	return (PVector2.y - PVector1.y) / (PVector2.x - PVector1.x);
}

function isInside(pos, button){
	return pos.x > button.p.x && pos.x < button.w + button.p.x && pos.y > button.p.y && pos.y < button.h + button.p.y
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