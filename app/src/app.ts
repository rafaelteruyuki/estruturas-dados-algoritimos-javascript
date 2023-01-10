import { DoublyLinkedList } from "./data-structures/doubly-linked-list";

const doublyLinkedList = new DoublyLinkedList<number>();
console.log('doublyLinkedList.getHead', doublyLinkedList.getHead);

doublyLinkedList.insert(2, 0);
console.log('doublyLinkedList.getHead', doublyLinkedList.getHead);

doublyLinkedList.insert(1, 0);
console.log('doublyLinkedList.getHead', doublyLinkedList.getHead);
console.log('doublyLinkedList.getHead.next', doublyLinkedList.getHead.next);
console.log('doublyLinkedList.getHead.prev', doublyLinkedList.getHead.prev);