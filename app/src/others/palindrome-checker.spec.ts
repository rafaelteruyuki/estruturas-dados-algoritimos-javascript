import { palindromeChecker } from '../../src/others/palindrome-checker';

describe('Palindrome', () => {

  it('Palindrome Checker', () => {
    expect(palindromeChecker('')).toBe(false);
    expect(palindromeChecker('a')).toBe(true);
    expect(palindromeChecker('aa')).toBe(true);
    expect(palindromeChecker('aba')).toBe(true);
    expect(palindromeChecker('ab')).toBe(false);
    expect(palindromeChecker('kayak')).toBe(true);
    expect(palindromeChecker('radar')).toBe(true);
    expect(palindromeChecker('level')).toBe(true);
    expect(palindromeChecker('Was it a car or a cat I saw')).toBe(true);
    expect(palindromeChecker('Step on no pets')).toBe(true);
    expect(palindromeChecker('Able was I ere I saw Elba')).toBe(true);
  });
});
