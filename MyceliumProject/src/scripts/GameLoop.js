
function setup() {
	var FPS = 30;
	// load content
	var device = this.getDevice();
	var buttons = this.createButtons();
	createEvents(buttons);

	//setInterval(Some variable, 1000/FPS);
}

function createButtons(){
	var x = canvas.width / 4;
	var y = canvas.height - canvas.height/10;
	var buttons = {};
	buttons["New Spore"] = new Button("New Spore","#93EBFB", PVector(0, y), x, canvas.height / 10);
	buttons["New Food Pellet"] = new Button("New Food Pellet", "#93EBFB", PVector(x, y), x, canvas.height / 10);
	buttons["Run Simulation"] = new Button("Run Simulation", "#93EBFB", PVector(x*2, y), x, canvas.height / 10);
	buttons["Reset"] = new Button("Reset", "#93EBFB", PVector(x*3, y), x, canvas.height / 10);
	
	return buttons;
}
	
function createEvents(buttons) { // Add event listeners
	var activeButtons = {};
	canvas.addEventListener("click", (e) => {
		Object.keys(buttons).forEach((btn) => { // add all currently active buttons
			if (buttons[btn].selected == true) activeButtons[btn] = buttons[btn];
		});
		Object.keys(buttons).forEach((btn) => { // Button handling first
			if (this.isInside(this.getMousePos(e, canvas), buttons[btn])) { // cursor clicked inside button
				buttons[btn].selected = true;
				activeButtons[btn] = buttons[btn];
				canvas.dispatchEvent(new CustomEvent("buttonClick", {
					bubbles: true,
					detail: {
						type: btn,
						buttons: buttons,
						activeButtons: activeButtons // Sent to handler to determine which buttons are active
					}
				}));
			}
		});
		// (TODO (3)) A button was not clicked. Therefore simulation area was clicked. Dispatch event.
	});
}

function getDevice(){
	var media="desktop";
	if(screen.width<=480){
		media="phone";
	}else if(screen.width<=768){
		media="tablet";
	}else{
		media="desktop";
	}
	return media;
}


function update() {
	frame = window.requestAnimationFrame(update);
	draw();
}

function draw() {

}

function test(){
	console.log("Test");
}

function getMousePos(e, canvas) {
	var rect = canvas.getBoundingClientRect();
	return new PVector(e.clientX - rect.left, e.clientY - rect.top);
}
//Function to check whether a point is inside a rectangle
function isInside(pos, button){
	return pos.x > button.p.x && pos.x < button.w + button.p.x && pos.y > button.p.y && pos.y < button.h + button.p.y
}

