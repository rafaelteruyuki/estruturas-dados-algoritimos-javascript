import { hotPotato } from '../../src/others/hot-potato';

describe('Hot Potato with Queue', () => {

  it('Hot potato game', () => {
    const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
    
    expect(hotPotato(names, 6).winner).toBe('Ingrid');
    expect(hotPotato(names, 7).winner).toBe('John');
    expect(hotPotato(names, 8).winner).toBe('Jack');
    expect(hotPotato(names, 9).winner).toBe('Ingrid');
    expect(hotPotato(names, 10).winner).toBe('Carl');
  });

});
