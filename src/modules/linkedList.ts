import Node from './linkedListNode';

export default class LinkedList<T> {
	private head: Node<T>;
	protected length: number;

	constructor() {
		this.length = 0;
	}

	public add(data: T): void {
		let temp: Node<T>;
		let prev: Node<T>;

		temp = new Node<T>();
		temp.data = data;

		if (this.head === undefined) {
			this.head = temp;
		} else {
			prev = this.head;
			while (prev.next != undefined) {
				prev = prev.next;
			}
			prev.next = temp;
		}

		this.length++;
	}

	public getData(index?: number): void {
		let current: Node<T> = this.head;
		let count: number = 0;

		if (index !== undefined) {
			for (let i = 0; i < index; i++) {
				current = current.next;
			}

			console.log(`data in index ${index} -> `, current.data);
		} else {
			while (current !== undefined) {
				console.log(`index: [${count}] data -> `, current.data);
				current = current.next;
				count++;
			}
		}
	}
}
