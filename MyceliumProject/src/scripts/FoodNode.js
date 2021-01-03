class FoodNode {
	constructor(PVector = this.randomNodeVector(canvas.width, canvas.height), radius = randomRadius(10, 15)) {
		this.p = PVector;
		this.radius = radius;
	}

	draw() {
		ctx.fillStyle = "#FF0000";
		ctx.strokeStyle = "#00FF00";
		ctx.beginPath(this.x,this.y);
		ctx.arc(this.p.x,this.p.y, this.radius, 0, Math.PI * 2);
		ctx.stroke();
		ctx.fill();
	}

	randomNodeVector(width, height){ // random vector between canvas width and height (with a 10px buffer on each side)
		var x = getRandomInt(10, width - 10);
		var y = getRandomInt(10, height - 10);
		return new PVector(x, y);
	}
}