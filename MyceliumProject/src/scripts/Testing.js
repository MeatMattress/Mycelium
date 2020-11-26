$(document).ready(() => {
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext('2d');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	var width = canvas.width;
	var height = canvas.height;
	var center = new PVector(width / 2, height / 2);


	var pv1 = new Spore(new PVector(center.x - 3, center.y - 3));
	pv1.draw("#FF0000"); // This is your starting PVector1, shown in red.
	var branch1 = new Branch(new PVector(center.x, center.y), new PVector(center.x + 1, center.y + 1));
	var branch2 = new Branch(new PVector(center.x, center.y), new PVector(center.x + 1, center.y - 1));
	var branch3 = new Branch(new PVector(center.x, center.y), new PVector(center.x - 1, center.y + 1));
	var branch4 = new Branch(new PVector(center.x, center.y), new PVector(center.x - 1, center.y - 1));
	var branch5 = new Branch(new PVector(center.x, center.y), new PVector(center.x + 1, center.y + 1));
	var branch6 = new Branch(new PVector(center.x, center.y), new PVector(center.x - 1, center.y - 1));
	var branch7 = new Branch(new PVector(center.x, center.y), new PVector(center.x + 1, center.y - 1));
	var branch8 = new Branch(new PVector(center.x, center.y), new PVector(center.x - 1, center.y + 1));

	test(pv1.p, branch1); // Spore.p = PVector
	test(pv1.p, branch2);
	test(pv1.p, branch3);
	test(pv1.p, branch4);
	test(pv1.p, branch5);
	test(pv1.p, branch6);
	test(pv1.p, branch7);
	test(pv1.p, branch8);

});

/*
	Should create 16 branching vectors pointing in VERY similar directions
	(every vector within 20 degrees difference of the last)
*/
function test(pv1, startingVector) {

	// init engine for access to class method findPartWay()
	var engine = new BranchEngine(pv1);
	// begin with a manual branch/vector for testing
	startingVector.draw();

	// Setting up a manual new PVector part-way between startingVector's PVector1 and PVector2
	var newPVector1 = engine.findPartWay(startingVector, 0.65);
	var tempVector = startingVector;
	var q = getQuadrant(getAngle(tempVector));

	// Main loop
	for (var i = 0; i < 15; i++) {
		// PVector2 for the new vector is determined by newVector()
		var newPVector2 = this.createNewVector(tempVector, newPVector1, 30, 30, q);

		// Create vector from newPVector1 to newPVector2
		var newVector = new Branch(newPVector1, newPVector2);
		newVector.draw();

		// Setting up next loop for newPVector1 and to pass the current vector into newVector()
		tempVector = newVector;
		newPVector1 = new PVector(engine.findPartWay(tempVector, 0.65));
	}
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

var subtractAngle = function (angle1, angle2) { // Finds the difference between twon angles
	if (angle1 - angle2 < 0) {
		return 360 - Math.abs(angle1 - angle2);
	} else {
		return angle1 - angle2;
	}
}

// This function will be placed in BranchEngine.js when finished testing here
function createNewVector(vector1, p1, angle, magnitude, q) {
	console.log("Vector quad", q);
	vector1_angle = getAngle(vector1);
	a1 = subtractAngle(vector1_angle, angle);
	a2 = addAngle(vector1_angle, angle);
	min = -angle;
	max = angle;
	rand_int = Math.floor((Math.random() * (max - min + 1)) + min)
	random_angle = addAngle(vector1_angle, rand_int);
	theta = random_angle
	console.log(`vector angle ${vector1_angle} min ${min} max ${max} rand_int ${rand_int} random ${random_angle}`);

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
	return new PVector(x, y);
}

function getQuadrant(angle) {
	q = 0
	if (angle >= 0 && angle <= 90) { //first quad
		q = 1
	} else if (angle > 90 && angle <= 180) { //second quad
		q = 2
	} else if (angle > 180 && angle <= 270) { //third
		q = 3
	} else if (angle > 270 && angle < 360) { // fourth
		q = 4
	}
	return q;
}
function quadrantAlignment(q, angle) {
	if (q == 4) {
		// if (angle)
	}	
}