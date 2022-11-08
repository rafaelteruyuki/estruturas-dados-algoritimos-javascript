import { Node } from './linked-list-models';

describe('LinkedListModels', () => {
  let node1: Node<number>;
  let node2: Node<number>;

  beforeEach(() => {
    node1 = new Node(1);
    node2 = new Node(2);
  });

  it('Node object should have the type specified when declared', () => {
    expect(typeof node1.element).toBe('number');
  });

  it('node1.next should be the same reference form node2', () => {
    node1.next = node2;
    expect(node1.next).toBe(node2);
  });
});
