const expect = require('chai').expect;
const checkPermute = require('./checkPermute.js');

describe('tests for permutation function', () => {

  it('should return true for second string that is rearrangement of letters', () => {
    expect(checkPermute('cba', 'abc')).to.be.true;
  });

  it('should return false when second argument is of different length', () => {
    expect(checkPermute('abc', 'aabbcc')).to.be.false;
  });

  it('should work for long strings', () => {
    expect(checkPermute('abcddfdferewrwerewrewrewr', 'abcddfdferewrwerewrewrewrfdshfiowhfeowqjfioewjf')).to.be.false;
  });
});
