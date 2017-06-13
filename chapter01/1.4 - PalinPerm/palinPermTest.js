const {expect} = require('chai');
const palinPerm = require('./palinPerm.js');

describe('should evaluate palinPerm function', () => {

  it('should return true for valid string', () => {
    expect(palinPerm('ahfhfahyffyhi')).to.be.true;
  });

  it('should return false for invalid string', () => {
    expect(palinPerm('kayaka')).to.be.false;
  });

  it('should return true for one letter strings', () => {
    expect(palinPerm('a')).to.be.true;
  });
  
});