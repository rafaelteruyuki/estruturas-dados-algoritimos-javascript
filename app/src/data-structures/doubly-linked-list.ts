import { defaultEquals, IEqualsFunction } from "../util";
import LinkedList from "./linked-list";
import { DoublyNode } from "./models/linked-list-models";

export class DoublyLinkedList<T> extends LinkedList<T> {
  protected head: DoublyNode<T> | undefined;
  protected tail: DoublyNode<T> | undefined;

  constructor(protected equalsFn: IEqualsFunction<T> = defaultEquals<T>) {
    super(equalsFn);
  }

  public get getHead(): DoublyNode<T> | undefined {
    return this.head;
  }

  public insert(element: T, index: number): boolean {
    if(index < 0 || index > this.count) return false;

    const node = new DoublyNode(element);
    let current = this.head;

    if(index === 0) {
      if(!this.head) {
        this.head = node;
        this.tail = node;
      } else {
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
      }
    } else if(index === this.count) {
      current = this.tail;
      current.next = node;
      node.prev = current;
      this.tail = node;
    } else {
      const previous = this.getElementAt(index - 1);
      current = previous.next;
      node.next = current;
      previous.next = node;

      current.prev = node;
      node.prev = previous;
    }
    this.count++;
    return true;
  }
}