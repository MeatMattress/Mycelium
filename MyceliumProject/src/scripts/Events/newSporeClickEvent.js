function sporeClickEvent (p) {
	var event = new customEvent("newSporeClick", {
		detail: {
			spore: new Spore(p)
		}
	});

	canvas.dispatchEvent(event);
}