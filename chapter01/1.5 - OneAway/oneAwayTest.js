const {expect} = require('chai');
const {checkReplacement, checkInsertOrDelete, oneAway} = require('./oneAway.js');

describe('should evaluate oneAway and helper functions', () => {

  it('should return false for functions of the same length with multiple replacements', () => {
    expect(checkReplacement('aaabc', 'aaacb')).to.be.false;
  });

  it('should return true for functions of the same length with only one replacement', () => {
    expect(checkReplacement('aaab', 'aaac')).to.be.true;
  });

  it('should return true for functions of the same length with only one replacement', () => {
    expect(oneAway('aaab', 'aaac')).to.be.true;
  });

  it('should return true for functions with args of one letter change away', () => {
    expect(checkInsertOrDelete('abcd', 'abc')).to.be.true;
  });

  it('should return true for functions with args of one letter change away', () => {
    expect(oneAway('abcd', 'abc')).to.be.true;
  });
  it('should return true for functions with args of one letter change away', () => {
    expect(oneAway('abc', 'abcd')).to.be.true;
  });
});