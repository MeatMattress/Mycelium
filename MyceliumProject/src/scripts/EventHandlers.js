function toggleButton(id) {
	var btnElement = document.getElementById(id);
		switch(id) {
			case activeButton: // button is already selected, toggle off.
				btnElement.style.backgroundColor="#00FFFF"
				activeButton = null;
				break;
			case "reset":
				btnElement.style.backgroundColor = "#76e393"
				setTimeout(() => {btnElement.style.backgroundColor = "#00FFFF"; setup();}, 50)
				break;
			case "toggleSimulation":
				if (pause) btnElement.style.backgroundColor="#ff4040"
				else btnElement.style.backgroundColor="#00FFFF"
				pause = !pause;
				break;
			case "newSpore":
				if (activeButton != null) document.getElementById(activeButton).style.backgroundColor = "#00FFFF"
				activeButton = id;
				btnElement.style.backgroundColor="#76e393"
				break;
			case "newFoodPellet":
				if (activeButton != null) document.getElementById(activeButton).style.backgroundColor = "#00FFFF"
				activeButton = id;
				btnElement.style.backgroundColor="#76e393"
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
			foodNode.draw();
			foodNodes.push(foodNode);
			for (var i = 0; i < spores.length; i++) {
				for (var r = 0; r < spores[i].roots.length; r++) {
					checkEaten(spores[i].roots[r], foodNode);
					var c = spores[i].roots[r].child;
					while (c != null) {
						checkEaten(c, foodNode);
						c = c.child;
					}
				}
			}
			break;
	}
}

window.onresize = function()
{
    var canvas = document.getElementById('canvas');
    canvas.width = window.innerWidth;
    canvas.style.width = window.innerWidth;
    canvas.height = window.innerHeight;
	canvas.style.height = window.innerHeight;
	
	redraw();
}