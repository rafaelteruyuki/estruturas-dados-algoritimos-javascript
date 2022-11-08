import { Node } from './models/linked-list-models';
import { defaultEquals } from "../util";

export default class LinkedList<T> {
  private count: number;
  private head: Node<T> | undefined;
  private equalsFn: (a: any, b: any) => boolean;

  constructor(equalsFn = defaultEquals<T>) {
    this.count = 0;
    this.equalsFn = equalsFn;
  }

  public push(element: T): void {
    const node = new Node<T>(element);
    let current: Node<T>;

    if(!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while(current.next) {
        current = current.next;
      }
      current.next = node;
    }

    this.count++;
  }

  // public insert(element: T, position: number): void {}

  // public getElementAt(position: number): T | undefined {}

  // public remove(element: T): void {}

  // public removeAt(position: number): void {}

  // public indexOf(element: T): number {}

  // public isEmpty(): boolean {}

  // public size(): number {}

  // public toString(): string {}
}
