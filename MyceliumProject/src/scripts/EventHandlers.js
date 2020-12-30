canvas.addEventListener("buttonClick", (button) => {
	var type = button.detail.type;
	switch(type) {
		case "New Spore":
			if (Object.keys(button.detail.activeButtons).includes('New Food Pellet')) {
				// deactivate new food pellet button
				delete button.detail.activeButtons["New Food Pellet"];
			}
			break;
		case "New Food Pellet":
			if (Object.keys(button.detail.activeButtons).includes('New Spore')) {
				// deactivate new food pellet button
				delete button.detail.activeButtons["New Spore"];
			}
			break;
		case "Run Simulation":
			// Run sim using animationframes
			break;
		case "Reset":
			button.detail.activeButtons = {};
			// clear the board
	}
	console.log(button.detail.activeButtons);
	// draw all active buttons and if not active, redraw as normal blue color
});

//canvas.addEventListener("simAreaClick",)