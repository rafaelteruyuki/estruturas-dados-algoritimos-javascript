import LinkedList from "./data-structures/linked-list";

const linkedList = new LinkedList<number>();
linkedList.push(10);
linkedList.push(15);
linkedList.push(20);

console.log(linkedList.getElementAt(2));
console.log(linkedList.toString);