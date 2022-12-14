import Stack from '../../src/data-structures/stack';

describe('Stack', () => {
  let stack: Stack<number>;

  beforeEach(() => {
    stack = new Stack<number>();
  });

  it('starts empty', () => {
    expect(stack.size()).toBe(0);
    expect(stack.isEmpty()).toBe(true);
  });

  it('pushes elements', () => {
    stack.push(1);
    expect(stack.size()).toBe(1);

    stack.push(2);
    expect(stack.size()).toBe(2);

    stack.push(3);
    expect(stack.size()).toBe(3);

    expect(stack.isEmpty()).toBe(false);
  });

  it('pops elements', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.pop()).toBe(undefined);
  });

  it('implements LIFO logic', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.pop()).toBe(undefined);
  });

  it('allows to peek at the top element in the stack without popping it', () => {
    expect(stack.peek()).toBe(undefined);

    stack.push(1);
    expect(stack.peek()).toBe(1);

    stack.push(2);
    expect(stack.peek()).toBe(2);

    stack.pop();
    expect(stack.peek()).toBe(1);
  });

  it('returns the correct size', () => {
    expect(stack.size()).toBe(0);
    stack.push(1);
    expect(stack.size()).toBe(1);
    stack.push(2);
    expect(stack.size()).toBe(2);
    stack.push(3);
    expect(stack.size()).toBe(3);

    stack.clear();
    expect(stack.isEmpty()).toBe(true);

    stack.push(1);
    stack.push(2);
    stack.push(3);

    stack.pop();
    expect(stack.size()).toBe(2);
    stack.pop();
    expect(stack.size()).toBe(1);
    stack.pop();
    expect(stack.size()).toBe(0);
    stack.pop();
    expect(stack.size()).toBe(0);
  });

  it('returns if it is empty', () => {
    expect(stack.isEmpty()).toBe(true);
    stack.push(1);
    expect(stack.isEmpty()).toBe(false);
    stack.push(2);
    expect(stack.isEmpty()).toBe(false);
    stack.push(3);
    expect(stack.isEmpty()).toBe(false);

    stack.clear();
    expect(stack.isEmpty()).toBe(true);

    stack.push(1);
    stack.push(2);
    stack.push(3);

    stack.pop();
    expect(stack.isEmpty()).toBe(false);
    stack.pop();
    expect(stack.isEmpty()).toBe(false);
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
  });

  it('clears the stack', () => {
    stack.clear();
    expect(stack.isEmpty()).toBe(true);

    stack.push(1);
    stack.push(2);

    stack.clear();
    expect(stack.isEmpty()).toBe(true);
  });

  it('returns toString primitive types', () => {
    expect(stack.toString()).toBe('');

    stack.push(1);
    expect(stack.toString()).toBe('1');

    stack.push(2);
    expect(stack.toString()).toBe('1,2');

    stack.clear();
    expect(stack.toString()).toBe('');

    const stackString = new Stack<string>();
    stackString.push('el1');
    expect(stackString.toString()).toBe('el1');

    stackString.push('el2');
    expect(stackString.toString()).toBe('el1,el2');
  });

  it('returns toString objects', () => {

    class MyObj {
      constructor(public el1: any, public el2: any) { }
      toString() {
        return `${this.el1.toString()}|${this.el2.toString()}`;
      }
    }
    const stackMyObj = new Stack<MyObj>();
    expect(stackMyObj.toString()).toBe('');

    stackMyObj.push(new MyObj(1, 2));
    expect(stackMyObj.toString()).toBe('1|2');

    stackMyObj.push(new MyObj(3, 4));
    expect(stackMyObj.toString()).toBe('1|2,3|4');
  });
});
