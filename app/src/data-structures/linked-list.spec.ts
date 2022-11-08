import LinkedList from '../../src/data-structures/linked-list';

describe('LinkedList', () => {
  let linkedList: LinkedList<number>;

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  it('Push element into linkedList', () => {
    linkedList.push(15);
    console.log(linkedList);
    
    linkedList.push(10);
    console.log(linkedList);

    linkedList.push(20);
    console.log(linkedList);


  })
});
