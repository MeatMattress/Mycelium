$(document).ready(() => {
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext('2d');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	var width = canvas.width;
	var height = canvas.height;
	var center = new PVector(width/2, height/2);
	var spore = new Spore(new PVector(center.x - 3, center.y-3));
	var engine = new BranchEngine(spore);
	// main loop
	var vec1 = new PVector(center);
	var vec2 = new PVector(center.x-30, center.y-40)
	var branch = new Branch(vec1, vec2);
	branch.draw();
	console.log("The center is " + center);
	console.log("PVector 1 (Red) is: "+branch.p1);
	console.log("Pvector 2 (Blue) is: "+branch.p2);
	
	spore.draw("#FF0000");
	var p2spore = new Spore(new PVector(branch.p2.x-3, branch.p2.y-2));
	p2spore.draw();

	console.log("The supposed angle is: "+getAngle(branch));
});
function getAngle(vector) { 
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
	else if (vector.p2.x < vector.p1.x && vector.p2.y < vector.p1.y) angle = -1*(((vector.p1.y - vector.p2.y) / (vector.p2.x - vector.p1.x)))+90;
	
	// if the vector is in the third quadrant, rise is negative and run is negative, so adjust the formula to fit, rise is now negative and run is now negative
	else if (vector.p2.x < vector.p1.x && vector.p2.y > vector.p1.y) angle = ((vector.p1.y - vector.p2.y) / (vector.p1.x - vector.p2.x))
	
	// if the vector is in the fourth quadrant, rise is negative but run is positive, so adjust the formula to fit, rise is now negative
	else if (vector.p2.x > vector.p1.x && vector.p2.y > vector.p1.y) angle = ((vector.p1.y - vector.p2.y) / (vector.p2.x - vector.p1.x))
	
	// return angle in degrees
	return ((Math.atan(angle)) * (180 / Math.PI));
}