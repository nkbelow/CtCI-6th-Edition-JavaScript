const {expect} = require('chai');
const urlify = require('./urlify.js');

describe('tests for urlify function', () => {

  it('should replace whitespace with correct char', () => {
    expect(urlify('a c b')).to.equal('a%20c%20b');
  });

  it('should still work with trailing whitespace', () => {
    expect(urlify('a b c     ')).to.equal('a%20b%20c');
  });

  it('should should equal correct url comparison when passed string', () => {
    expect(urlify('adggdgd')).to.not.equal('adggdgdwe');
  });
});