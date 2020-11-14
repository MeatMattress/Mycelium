$(document).ready(() => {
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext('2d');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	var width = canvas.width;
	var height = canvas.height;
	var center = new PVector(width/2, height/2);
	// main loop
	for (var i=0;i<6;i++) {
		var food = new FoodNode();
		food.draw();
	}
});