const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {
	constructor() {
		this.origin = null;
	}
	root = () => this.origin;

	add = (data) => {
		let current = this.origin;
		while (current) {
			if (data < current.data) {
				if (!current.left) current.left = new Node(data);
				current = current.left;
			} else if (data > current.data) {
				if (!current.right) current.right = new Node(data);
				current = current.right;
			} else return;
		}
		this.origin = new Node(data);
	}

	find = (data) => {
		let current = this.origin;
		while (current) {
			if (data < current.data) current = current.left;
			else if (data > current.data) current = current.right;
			else return current;
		}
		return null;
	}

	has = (data) => this.find(data) ? true : false;

	remove = (data) => this.origin = this.removeNode(this.origin, data);

	removeNode(current, data) {
		if (data === current.data) {
			if (!current.left) return current.right;
			if (!current.right) return current.left;
			let minRightBranch = current.right;
			while (minRightBranch.left) minRightBranch = minRightBranch.left
			current.data = minRightBranch.data;
			current.right = this.removeNode(current.right, minRightBranch.data);
		} else if (data < current.data) current.left = this.removeNode(current.left, data);
		else if (data > current.data) current.right = this.removeNode(current.right, data);
		return current;
	}

	minMax = (side) => {
		let current = this.origin;
		if (!current) return null;
		while (current[side]) current = current[side];
		return current.data;
	}

	min = () => this.minMax('left');
	max = () => this.minMax('right');
}