class Branch {
	constructor(PVector1, PVector2) {
		this.p1 = PVector1;
		this.p2 = PVector2;
		this.child = null;
		this.parent = null;
	}

	draw(color = "#00FF00") {
		ctx.strokeStyle = color;
		ctx.beginPath();
		ctx.moveTo(this.p1.x, this.p1.y);
		ctx.lineTo(this.p2.x, this.p2.y);
		ctx.stroke();
	}
}