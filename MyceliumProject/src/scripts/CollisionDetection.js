function collisionBranchBranchPast(a,b,c,d,p,q,r,s) {
  var det, gamma, lambda;
  det = (c - a) * (s - q) - (r - p) * (d - b);
  if (det === 0) {
    return false;
  } else {
    lambda = ((s - q) * (r - a) + (p - r) * (s - b)) / det;
    gamma = ((b - d) * (r - a) + (c - a) * (s - b)) / det;
    return (0 < lambda && lambda < 1) && (0 < gamma && gamma < 1);
  }
};

function collisionBranchBranch(b1, b2) { // Branch 1 and Branch 2 ([a,b], [c,d]) | ([p,q], [r,s])
	var det, gamma, lambda;
	det = (b1.p2.x - b1.p1.x) * (b2.p2.y - b2.p1.y) - (b2.p2.x - b2.p1.x) * (b1.p2.y - b1.p1.y);
	if (det === 0) return false;
	else {
		lambda = ((b2.p2.y - b2.p1.y) * (b2.p2.x - b1.p1.x) + (b2.p1.x - b2.p2.x) * (b2.p2.y - b1.p1.y)) / det;
		gamma = ((b1.p1.y - b1.p2.y) * (b2.p2.x - b1.p1.x) + (b1.p2.x - b1.p1.x) * (b2.p2.y - b1.p1.y)) / det;
		return (0 < lambda && lambda < 1) && (0 < gamma && gamma < 1);
	}
}

function collisionfoodNodebranch(foodNode,branch){ // Both are objects

    var side1 = Math.sqrt(Math.pow(foodNode.p.x - branch.p1.x,2) + Math.pow(foodNode.p.y - branch.p1.y,2)); // Thats the pythagoras theoram If I can spell it right

    var side2 = Math.sqrt(Math.pow(foodNode.p.x - branch.p2.x,2) + Math.pow(foodNode.p.y - branch.p2.y,2));

    var base = Math.sqrt(Math.pow(branch.p2.x - branch.p1.x,2) + Math.pow(branch.p2.y - branch.p1.y,2));

    if(foodNode.radius > side1 || foodNode.radius > side2)
        return true;

    var angle1 = Math.atan2( branch.p2.x - branch.p1.x, branch.p2.y - branch.p1.y ) - Math.atan2( foodNode.p.x - branch.p1.x, foodNode.p.y - branch.p1.y ); // Some complicated Math

    var angle2 = Math.atan2( branch.p1.x - branch.p2.x, branch.p1.y - branch.p2.y ) - Math.atan2( foodNode.p.x - branch.p2.x, foodNode.p.y - branch.p2.y ); // Some complicated Math again

    if(angle1 > Math.PI / 2 || angle2 > Math.PI / 2) // Making sure if any angle is an obtuse one and Math.PI / 2 = 90 deg
        return false;


        // Now if none are true then

        var semiperimeter = (side1 + side2 + base) / 2;

        var areaOfTriangle = Math.sqrt( semiperimeter * (semiperimeter - side1) * (semiperimeter - side2) * (semiperimeter - base) ); // Heron's formula for the area

        var height = 2*areaOfTriangle/base;

        if( height < foodNode.radius )
            return true;
        else
            return false;

}