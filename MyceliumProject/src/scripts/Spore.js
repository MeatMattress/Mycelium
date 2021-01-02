class Spore {
	constructor(PVector) {
		this.p = PVector;
		this.branches = [];
		this.canvas = document.getElementById("canvas");
		this.ctx = canvas.getContext('2d');
		this.canvasHeight = this.canvas.height;
		this.canvasWidth = this.canvas.width;
		this.radius = 3;
	}

	push(branch) {
		this.branches.push(branch);
	}

	draw(color = "#FF0000") {
		this.ctx.fillStyle = color;
		this.ctx.beginPath();
		this.ctx.arc(this.p.x, this.p.y, this.radius, 0, 2*Math.PI)
		this.ctx.closePath();
		this.ctx.fill();
	}
	
}