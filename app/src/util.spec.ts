import { defaultEquals } from "../src/util";

describe('Util', () => {

  it('defaultEquals() should compare two values and return if they are equal', () => {
    const equalsFn = defaultEquals;

    expect(equalsFn('stringTest', 'stringTest')).toBeTruthy();
    expect(equalsFn(0, 2)).toBeFalsy();
  });
});
