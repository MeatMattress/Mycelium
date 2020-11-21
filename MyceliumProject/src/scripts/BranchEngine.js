// calculate angle of a vector


// create new angle 'A' based on that angle, angle must be within a certain range

// get random middle-ish distance between a line segment (two PVectors)

// place PVector 1 on the middle-ish coordinate

// -- You need a way to generate random magnitudes 'M' within a certain range, decreasing each time it branches.

// Use that magnitude to generate PVector2 and place it on a point between the min and max angle with magnitude M - scaleFactor

// -- Think about the data structure a little more
// Each branch will have 1+ child and only 1 parent

// "EVENTLISTENER" if the most recently added branch has collided with a food node, move PVector2 to the collision point
// Route back up to the parent, changing all of its parent's colors to a different one / redrawing them

// TODO: Path-finding based on this implementation. Will come in a later build.
class BranchEngine{
	constructor(spore){
		this.spore = spore;
		this.children = [];
		this.canvas = document.getElementById("canvas");
		this.ctx = canvas.getContext('2d');
		this.width = canvas.width;
		this.height = canvas.height;
		this.center = new PVector(this.width/2, this.height/2);
	}

	getNewBranch(branch) {
		return new Branch(this.center, new PVector(PVector.prototype.rotateBy(this.getRandomInt(30, 150))));
	}

	getRandomInt(min, max) { // gets a random number between min and max (height and width, usually)
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
	}

	findPartWay(vector, scalar) {
		var distX = vector.p2.x - vector.p1.x;
		var distY = vector.p2.y - vector.p1.y;

		var modX = (distX * scalar) + vector.p1.x;
		var modY = (distY * scalar) + vector.p1.y;

		return new PVector(modX, modY);
	}
}