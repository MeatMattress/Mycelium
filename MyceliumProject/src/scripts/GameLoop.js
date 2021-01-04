function setup() {
	var interval = 30;
	pause = true;
	canvas.width = window.innerWidth
	canvas.height = window.innerHeight - (window.innerHeight - document.getElementById("buttons").getBoundingClientRect().top);

	
	var btns = document.getElementsByClassName("button"); // Set / reset button background colors
	for (var i = 0;i<btns.length;i++) {
		btns[i].style.backgroundColor = "#00FFFF";
	}

	switch(getDevice()) { // Determine best button font
		case "phone":
			for (var i = 0;i<btns.length;i++) {
				btns[i].style.fontSize = parseInt((window.innerHeight / document.getElementById("buttons").getBoundingClientRect().height) * 1.25)+"px";
			}
			break;
		case "desktop":
			for (var i = 0;i<btns.length;i++) {
				btns[i].style.fontSize = "2vmax";
			}
			break;
		case "tablet":
			for (var i = 0;i<btns.length;i++) {
				btns[i].style.fontSize = "2vmax";
			}
			break;
	}
	
	activeButton = null;
	spores = [];
	foodNodes = [];

	maxRoots = 100;
	maxLength = 100;
	branchMagnitude = 5;
	newBranchAngle = 10;

	colorIterator = 0;
	
	clearCanvas();
	interval = setInterval(draw, 1000/interval);
}

function clearCanvas() {
	ctx.fillStyle="#000000";
	ctx.fillRect(0,0,canvas.width, canvas.height);
}

function draw() {
	if (pause) return;

	for (var i=0;i<spores.length; i++) {  // Initial roots
		while (spores[i].roots.length < maxRoots) {
			var branch = randomBranch(spores[i], branchMagnitude);
			spores[i].roots.push(branch);
			branch.draw(colorList[colorIterator]);
		}
	}
	for (var i=0;i<spores.length; i++) {
		if (spores[i].branchLength < maxLength) {
			for (var j = 0; j < spores[i].roots.length; j++) {
				var currentBranch = getLeafChild(spores[i].roots[j]);
					var p1 = currentBranch.p2;
					var p2 = createNewVector(currentBranch, p1, newBranchAngle, branchMagnitude, getQuadrant(getAngle(currentBranch)));

					var newBranch = new Branch(p1, p2);
					addChild(currentBranch, newBranch);
					newBranch.draw(colorList[colorIterator]);
					
			}
			
			
			spores[i].branchLength++;
		}
		
	}
	var step = Math.ceil(360 / maxLength);
	colorIterator = (colorIterator + step)% 360;

	
	
	
	

}

function getLeafChild(root) {
	if (root.child == null) {
		return root;
	}
	else {
		return getLeafChild(root.child);
	}
}

function addChild(branch, child) {
	if (branch.child != null) {
		addChild(branch.child, child);
	}
	else {
		branch.child = child;
		child.draw();
	}
}

function getDevice(){ // Used to render font
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