class FoodNode {
	constructor(PVector = this.randomNodeVector(canvas.width, canvas.height), radius = randomRadius(10, 15)) {
		this.p = PVector;
		this.radius = radius;

		this.canvas = document.getElementById("canvas");
		this.ctx = canvas.getContext('2d');
		this.canvasHeight = this.canvas.height;
		this.canvasWidth = this.canvas.width;
	}

	draw() {
		this.ctx.fillStyle = "#FF0000";
		this.ctx.strokeStyle = "#00FF00";
		this.ctx.beginPath(this.x,this.y);
		this.ctx.arc(this.p.x,this.p.y, this.radius, 0, Math.PI * 2);
		this.ctx.stroke();
		this.ctx.fill();
	}

	randomNodeVector(width, height){ // calculate random vector between canvas width and height (with a 10px buffer on each side)
		var x = this.getRandomInt(10, width - 10);
		var y = this.getRandomInt(10, height - 10);
		return new PVector(x, y); // default random vector generates vector between height and width of canvas
	}
}