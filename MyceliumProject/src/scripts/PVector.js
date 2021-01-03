class PVector {
    constructor(vec_or_x, y) { // args[0] can be a vector or an x coordinate
        if (arguments.length === 1) {
            this.x = vec_or_x.x || 0;
            this.y = vec_or_y.y || 0;
        }
        else {
            this.x = vec_or_x;
            this.y = y;
        }
    }
}