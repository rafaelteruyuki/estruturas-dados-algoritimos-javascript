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

  /**
   * @returns The head of the list
  */
  public get getHead(): Node<T> | undefined {
    return this.head;
  }

  /**
   * @returns The size of the list
  */
  public get size(): number {
    return this.count;
  }

  /**
   * @description Inserts an element at the end of the list
   * @param element
  */
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

  /**
   * 
   * @param position 
   * @returns The element at the received position
  */
  public getElementAt(position: number): Node<T> | undefined {
    if(position < 0 || position > this.count) return undefined;

    let current = this.head;
    for(let i = 0; i < position && current; i++) {
      current = current.next;
    }

    return current;
  }

  /**
   * 
   * @param element 
   * @param position 
   * @returns True if success and False if fail
  */
  public insert(element: T, position: number): boolean {
    if(position < 0 || position > this.count) return false;

    const node = new Node<T>(element);
    if(position === 0) {
      const current = this.head;
      node.next = current;
      this.head = node;
    } else {
      const previous = this.getElementAt(position - 1);
      const current = previous?.next;
      node.next = current;
      previous!.next = node;
    }
    this.count++;
    return true;
  }


  // public remove(element: T): void {}

  /**
   * 
   * @param position 
   * @returns The element removed
   */
  public removeAt(position: number): T | undefined {
    if(position < 0 || position >= this.count) return undefined;

    let current = this.head;

    if(position === 0) {
      this.head = current?.next;
    } else {
      const previous = this.getElementAt(position - 1);
      current = previous?.next;
      previous!.next = current?.next;
    }

    this.count--;
    return current?.element;
  }

  // public indexOf(element: T): number {}

  // public isEmpty(): boolean {}

  // public toString(): string {}
}
