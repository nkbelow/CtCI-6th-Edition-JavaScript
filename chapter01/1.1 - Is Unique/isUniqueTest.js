const expect = require('chai').expect;
const {isUniq} = require('./isUnique.js');
const {isUniqWithoutDS} = require('./isUnique.js');

describe('tests for isUniq function', function() {

  it('should return false for words with duplicate chars', function() {
    expect(isUniq('abcdfgjkidjijklkjk')).to.be.false;
  });

  it('should return true for words with unique chars', function() {
    expect(isUniq('abcdefghijklmnopqrstuvwxyz')).to.be.true;
  });

  it('should handle whiteSpace properly', function() {
    expect(isUniq('a b c d e')).to.be.true;
  });

  it('should work without adding extra DS', function() {
    expect(isUniqWithoutDS('aaabbcc')).to.be.false;
  });


});