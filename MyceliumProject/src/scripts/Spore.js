class Spore {
	constructor(PVector) {
		this.p = PVector;
		this.roots = [];
		this.radius = 3;
		this.branchLength = 0;
	}

	draw(color = "#FFFFFF") {
		ctx.fillStyle = color;
		ctx.beginPath();
		ctx.arc(this.p.x, this.p.y, this.radius, 0, 2*Math.PI)
		ctx.closePath();
		ctx.fill();
	}
	
}