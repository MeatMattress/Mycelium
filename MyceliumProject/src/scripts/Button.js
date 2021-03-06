class Button {
	constructor(type, color, p, w, h) {
		this.type = type;
		this.color = color;
		this.p = p;
		this.w = w;
		this.h = h;
		this.selected = false;

		this.drawButton(this.color);
	}

	drawButton(color) {
		ctx.fillStyle = color;
		ctx.strokeStyle = "#000000";
		ctx.fillRect(this.p.x, this.p.y, this.w, this.h);
		ctx.strokeRect(this.p.x, this.p.y, this.w, this.h);

		ctx.fillStyle = "#000000";
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		ctx.font = "20px Times";
		ctx.fillText(this.type, this.p.x + this.w/2, this.p.y + this.h/2);
	}
}