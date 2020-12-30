class Button {
	constructor(type, color, p, w, h) {
		this.type = type;
		this.color = color;
		this.p = p;
		this.w = w;
		this.h = h;
		this.selected = false;

		this.drawButton(this.color);
		//this.logDetails();
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

	trigger() { // BUTTON EVENTHANDLER
		console.log("Triggered"); // bugggggged

		switch(this.type) {
			case "New Spore" :
				this.selected = !this.selected;
				this.color == "#76e393" ? this.color = "#93EBFB" : this.color = "#76e393";
				this.drawButton(this.color);
				
				
				break;
			case "New Food Pellet" : 
				this.selected = !this.selected;
				this.color == "#ACDF86" ? this.color = "#93EBFB" : this.color = "#ACDF86";
				this.drawButton(this.color);
				break;
			case "Run Simulation" :
				this.selected = true;
				this.color == "#76e393";
				this.drawButton(this.color);
				// Run sim
				break;
			case "Reset" :

				//redraw
				break;
		}
	}
}