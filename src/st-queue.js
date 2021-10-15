const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {

	constructor() {
		this.first;
		this.last;
	}

	getUnderlyingList = () => this.first;

	enqueue = (value) => {
		if (!this.first) {
			this.last = (this.first = new ListNode(value));
		} else {
			this.last = (this.last.next = new ListNode(value));
		}
	}

	dequeue = () => {
		let first = this.first.value;
		this.first = this.first.next;
		return first;
	}
}
