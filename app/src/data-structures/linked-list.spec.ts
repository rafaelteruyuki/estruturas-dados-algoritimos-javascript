import LinkedList from '../../src/data-structures/linked-list';

describe('LinkedList', () => {
  const ELEMENT01 = 10;
  const ELEMENT02 = 15;
  const ELEMENT03 = 20;

  let linkedList: LinkedList<number>;

  beforeEach(() => {
    linkedList = new LinkedList();
    linkedList.push(ELEMENT01);    
    linkedList.push(ELEMENT02);
    linkedList.push(ELEMENT03);
  });
  
  it('[G] size should return the size of the list', () => {
    expect(linkedList.size).toBe(3);
  });

  it('[G] getHead should return head of the list', () => {
    expect(linkedList.getHead).not.toBe(undefined);
  });

  it('[G] isEmpty should return true if the list is empty otherwise false', () => {
    const list = new LinkedList<string>();
    expect(list.isEmpty).toBe(true);

    list.push('Name');
    expect(list.isEmpty).toBe(false);
  });

  it('[G] toString should return the string visualization of the list', () => {
    const STRING = `${ELEMENT01}, ${ELEMENT02}, ${ELEMENT03}`;
    expect(linkedList.toString).toBe(STRING)
  });
  
  it(`#${LinkedList.prototype.push.name} should push an element into the list`, () => {
    const ELEMENT = 25;

    linkedList.push(ELEMENT);
    expect(linkedList.size).toBe(4);
    expect(linkedList.getElementAt(3)?.element).toBe(ELEMENT);
  });

  it(`#${LinkedList.prototype.getElementAt.name} should return the node at the specified position`, () => {
    const POSITION = 1;
    expect(linkedList.getElementAt(POSITION)?.element).toBe(ELEMENT02);
  });

  it(`#${LinkedList.prototype.removeAt.name} should remove the first node when 0 is passed`, () => {
    expect(linkedList.removeAt(0)).toBe(ELEMENT01);
    expect(linkedList.getHead?.element).toBe(ELEMENT02);
    expect(linkedList.size).toBe(2);
  });
  
  it(`#${LinkedList.prototype.removeAt.name} should remove the specified node`, () => {
    const POSITION = 1;

    expect(linkedList.removeAt(POSITION)).toBe(ELEMENT02);
    
    const head = linkedList.getHead;
    expect(head?.element).toBe(ELEMENT01);
    expect(head?.next?.element).toBe(ELEMENT03);

    expect(linkedList.size).toBe(2);
  });

  it(`#${LinkedList.prototype.insert.name} should insert an element at the top of the list`, () => {
    const ELEMENT = 5;
    const POSITION = 0;
    
    linkedList.insert(ELEMENT, POSITION);
    expect(linkedList.size).toBe(4);
    expect(linkedList.getHead?.element).toBe(ELEMENT);
    expect(linkedList.getElementAt(POSITION)?.element).toBe(ELEMENT);
  });

  it(`#${LinkedList.prototype.insert.name} should insert an element at the specified position`, () => {
    const ELEMENT = 18;
    const POSITION = 2;
    
    linkedList.insert(ELEMENT, POSITION);
    expect(linkedList.size).toBe(4);
    expect(linkedList.getElementAt(POSITION)?.element).toBe(ELEMENT);
  });

  it(`#${LinkedList.prototype.indexOf.name} should return the index of a given element`, () => {
    expect(linkedList.indexOf(ELEMENT01)).toBe(0);
    expect(linkedList.indexOf(ELEMENT02)).toBe(1);
    expect(linkedList.indexOf(ELEMENT03)).toBe(2);
    expect(linkedList.indexOf(50)).toBe(-1);
  });
});
