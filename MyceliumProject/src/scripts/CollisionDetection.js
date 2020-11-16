/*function collisionBranchBranch(b1, b2) { // Branch 1 and Branch 2 ([a,b], [c,d]) | ([p,q], [r,s])
	var det, gamma, lambda;
	det = (b1.p2.x - b1.p1.x) * (b2.p2.y - b2.p1.y) - (b2.p2.x - b2.p1.x) * (b1.p2.y - b1.p1.y);
	if (det === 0) return false;
	else {
		lambda = ((b2.p2.y - b2.p1.y) * (b2.p2.x - b1.p1.x) + (b2.p1.x - b2.p2.x) * (b2.p2.y - b1.p1.y)) / det;
		gamma = ((b1.p1.y - b1.p2.y) * (b2.p2.x - b1.p1.x) + (b1.p2.x - b1.p1.x) * (b2.p2.y - b1.p1.y)) / det;
		return (0 < lambda && lambda < 1) && (0 < gamma && gamma < 1);
	}
}
*/
function intersect(b1, b2) {
  // b1.p1.x, b1.p1.y, b1.p2.x, b1.p2.y, b2.p1.x, b2.p1.y, b2.p2.x, b2.p2.y

  // Check if none of the lines are of length 0
    if ((b1.p1.x === b1.p2.x && b1.p1.y === b1.p2.y) || (b2.p1.x === b2.p2.x && b2.p1.y === b2.p2.y)) {
        return false
    }

    denominator = ((b2.p2.y - b2.p1.y) * (b1.p2.x - b1.p1.x) - (b2.p2.x - b2.p1.x) * (b1.p2.y - b1.p1.y))

  // Lines are parallel
    if (denominator === 0) {
        return false
    }

    let ua = ((b2.p2.x - b2.p1.x) * (b1.p1.y - b2.p1.y) - (b2.p2.y - b2.p1.y) * (b1.p1.x - b2.p1.x)) / denominator
    let ub = ((b1.p2.x - b1.p1.x) * (b1.p1.y - b2.p1.y) - (b1.p2.y - b1.p1.y) * (b1.p1.x - b2.p1.x)) / denominator

  // is the intersection along the segments
    if (ua < 0 || ua > 1 || ub < 0 || ub > 1) {
        return false
    }

  // Return a object with the x and y coordinates of the intersection
    let x = b1.p1.x + ua * (b1.p2.x - b1.p1.x)
    let y = b1.p1.y + ua * (b1.p2.y - b1.p1.y)

    return {x, y}
}

function collisionBranchFoodNode(circle, line){
    var b, c, d, u1, intersectionPoint, v1, v2;
    v1 = {};
    v2 = {};
    v1.x = line.p2.x - line.p1.x;
    v1.y = line.p2.y - line.p1.y;
    v2.x = line.p1.x - circle.p.x;
    v2.y = line.p1.y - circle.p.y;
    b = (v1.x * v2.x + v1.y * v2.y);
    c = 2 * (v1.x * v1.x + v1.y * v1.y);
    b *= -2;
    d = Math.sqrt(b * b - 2 * c * (v2.x * v2.x + v2.y * v2.y - circle.radius * circle.radius));
    if(isNaN(d)){ // no intercept
        return false;
    }
    else { // intercept found, further test the line to see if it's within the segment
      u1 = (b - d) / c;  // these represent the unit distance of point one and two on the line
      u2 = (b + d) / c;    
      intersectionPoint = {};   // return point
      if(u1 <= 1 && u1 >= 0){  // add point if on the line segment
          intersectionPoint.x = line.p1.x + v1.x * u1;
          intersectionPoint.y = line.p1.y + v1.y * u1;
      }
      if ($.isEmptyObject(intersectionPoint)) return false; // none found on the segment either
      return intersectionPoint;
    }
}