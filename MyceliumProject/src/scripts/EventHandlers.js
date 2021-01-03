function toggleButton(id) {
	var btn = document.getElementById(id);
	if (activeButton === null) {
		activeButton = id;
		btn.style.backgroundColor="#76e393"
	}
	else if (activeButton === id && id != "toggleSimulation") { // button is already selected, toggle off.
		btn.style.backgroundColor="#00FFFF"
		activeButton = null;
	}
	else { 
		document.getElementById(activeButton).style.backgroundColor = "#00FFFF"; // switching buttons
		activeButton = id;
		btn.style.backgroundColor="#76e393"
	}

	switch(activeButton) { // Run and Reset buttons
		case "toggleSimulation":
			if (pause) btn.style.backgroundColor="#76e393"
			else btn.style.backgroundColor="#00FFFF"
			pause = !pause;
			draw();
			break;
		case "reset":
			setTimeout(() => {document.getElementById(activeButton).style.backgroundColor = "#00FFFF"; setup();}, 50)
			break;
	}

}

function canvasClick(e){
	if (activeButton === null) return;
	switch(activeButton) {
		case "newSpore":
			var spore = new Spore(getMousePos(e,canvas));
			spores.push(spore);
			spore.draw();
			break;
		case "newFoodPellet":
			var foodNode = new FoodNode(getMousePos(e,canvas));
			foodNodes.push(foodNode);
			foodNode.draw();
			break;
	}
}