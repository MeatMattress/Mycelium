class Spore {
	constructor(PVector) {
		this.p = PVector;
		this.branches = [];
	}

	push(branch) {
		this.branches.push(branch);
	}
}