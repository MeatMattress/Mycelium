class Spore {
	constructor(PVector) {
		this.p = PVector;
		this.branches = [];
		this.canvas = document.getElementById("canvas");
		this.ctx = canvas.getContext('2d');
		this.canvasHeight = this.canvas.height;
		this.canvasWidth = this.canvas.width;
	}

	push(branch) {
		this.branches.push(branch);
	}

	draw(color = "#0000FF") {
		this.ctx.fillStyle = color;
		this.ctx.fillRect(this.p.x, this.p.y, 5, 5);
	}
	
}