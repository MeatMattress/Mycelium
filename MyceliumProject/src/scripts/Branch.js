class Branch {
	constructor(PVector1, PVector2, children, parents) {
		this.p1 = PVector1;
		this.p2 = PVector2;
		this.children = children;
		this.parents = parents;
	}

	draw() {
		var canvas = document.getElementById("canvas");
		var ctx = canvas.getContext('2d');
		ctx.strokeStyle = "0000FF";
		ctx.beginPath();
		ctx.moveTo(this.p1.x, this.p1.y);
		ctx.lineTo(this.p2.x, this.p2.y);
		ctx.stroke();
	}
}