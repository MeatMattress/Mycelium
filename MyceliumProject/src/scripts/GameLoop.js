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
	maxLength = 50;
	branchMagnitude = 10;
	newBranchAngle = 10;

	colorIterator = 0;
	
	interval = setInterval(draw, 1000/interval);
}

function draw() {
	if (pause) return;

	for (var i=0;i<spores.length; i++) {  // Initial roots
		while (spores[i].roots.length < maxRoots) {
			var branch = randomBranch(spores[i], branchMagnitude);
			branch.color = colorList[colorIterator];
			spores[i].roots.push(branch);
			branch.draw();
		}
	}
	for (var i=0;i<spores.length; i++) {
		if (spores[i].branchLength < maxLength) {
			for (var j = 0; j < spores[i].roots.length; j++) {
				var currentBranch = getLeafChild(spores[i].roots[j]);
					var p1 = currentBranch.p2;
					var p2 = createNewVector(currentBranch, p1, newBranchAngle, branchMagnitude, getQuadrant(getAngle(currentBranch)));

					var newBranch = new Branch(p1, p2);
					newBranch.color = colorList[colorIterator];
					addChild(currentBranch, newBranch);
					newBranch.draw();
					
			}
			
			
			spores[i].branchLength++;
		}
		
	}
	var step = Math.ceil(360 / maxLength);
	colorIterator = (colorIterator + step)% 360;

	
	
	
	

}

function redraw(){ // onResize
	for (var i=0;i<spores.length;i++) {
		spores[i].draw();
		for (var j=0;j<spores[i].roots.length;j++) {
			spores[i].roots[j].draw();
			var currChild = spores[i].roots[j].child;
			while (currChild != null) {
				currChild.draw();
				currChild = currChild.child;
			}
		}
	}
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