$(document).ready(() => {
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext('2d');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	var width = canvas.width;
	var height = canvas.height;
	var center = new PVector(width/2, height/2);

	
	// main tests
	var spore = new Spore(new PVector(center.x - 3, center.y-3)); // just using this to display PVector1 of the line
	spore.draw("#FF0000");
	
	var engine = new BranchEngine(spore);

	var PVector1 = new PVector(center); // PVectors can either take a (vector) as a parameter, or (x,y) coordinates
	var PVector2 = new PVector(center.x-30, center.y-40)
	var branch = new Branch(PVector1, PVector2); // A branch is a Vector in the context of this project.
	branch.draw();

	var newVec = newVector(branch, 30, 70, engine);
	console.log(newVec);

	sporeTest = new Spore(newVec);
	sporeTest.draw();




});
function getAngle(vector) { // FIXME/REWRITE: RETURNS INCORRECT ANGLE FOR ANYTHING BUT ANGLES IN QUADRANT 1
/* 
	Formula for getting the angle of a vector, which is atan(slope_of_vector)

	Must determine quadrant to get actual slope because y is always positive because the (x,y) axis is at (0,0)
	The center of this canvas is (canvas_width / 2, canvas_height / 2), not (0,0).
	The Y axis INCREASES as you move downwards.
	Keep this in mind when determining the quadrant of the vector's (p2.x, p2.y) because the rise/run calculation
	will be different depending on the difference between y2 and y1. 

	Example: If the vector points downwards, (p2.y - p1.y) (which iis
	actually positive, when it should be negative.
*/
	var angle;

	// if the vector points in the first quadrant, rise is positive and run is positive, so adjust the formula to fit, rise is now positive
	if (vector.p2.x > vector.p1.x && vector.p2.y < vector.p1.y) angle = ((vector.p1.y - vector.p2.y) / (vector.p2.x - vector.p1.x));
	
	// if the vector is in the second quadrant, rise is positive but run is negative, so adjust the formula to fit, rise is now positive and run is now negative
	else if (vector.p2.x < vector.p1.x && vector.p2.y < vector.p1.y) angle = ((vector.p1.y - vector.p2.y) / (vector.p2.x - vector.p1.x));
	
	// if the vector is in the third quadrant, rise is negative and run is negative, so adjust the formula to fit, rise is now negative and run is now negative
	else if (vector.p2.x < vector.p1.x && vector.p2.y > vector.p1.y) angle = ((vector.p1.y - vector.p2.y) / (vector.p1.x - vector.p2.x))
	
	// if the vector is in the fourth quadrant, rise is negative but run is positive, so adjust the formula to fit, rise is now negative
	else if (vector.p2.x > vector.p1.x && vector.p2.y > vector.p1.y) angle = ((vector.p1.y - vector.p2.y) / (vector.p2.x - vector.p1.x))
	
	// return angle in degrees
	return ((Math.atan(angle)) * (180 / Math.PI));
}

var addAngle = function(angle1, angle2) { // Finds the sum of two angles
	if (angle1 + angle2 > 360) {
		return (angle1 + angle2) - 360;
	} else {
		return angle1 + angle2;
	}
}

var subtractAngle = function(angle1, angle2) { // Finds the difference between twon angles
	if (angle1 - angle2 < 0) {
		return 360 - Math.abs(angle1 - angle2);
	} else {
		return angle1 - angle2;
	}
}

// This function will be placed in BranchEngine.js when finished testing here
function newVector(vector1, angle, magnitude, engine) {
	console.log("recived vector", vector1);
	console.log("recived engine", engine);
	vector1_angle = getAngle(vector1);
	min = subtractAngle(vector1_angle, angle);
	max = addAngle(vector1_angle, angle);
	p1 = engine.findPartWay(vector1, 0.25)
	random_angle = Math.floor(Math.random() * (max - min + 1)) + min;
	x = p1.x + magnitude * Math.cos(random_angle);
	y = p1.y + magnitude * Math.sin(random_angle);
	return new PVector(x, y);
}

function update() {

}
function draw() {

}