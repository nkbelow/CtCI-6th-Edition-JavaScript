const {expect} = require('chai');
const strComp = require('./strComp.js');

describe('evaluate strComp function', () => {

  it('should return the same string if there are no duplicates present', () => {
    expect(strComp('abcd')).to.equal('abcd');
  });

  it('should return correct output when duplicates are present', () => {
    expect(strComp('aabbccccdd')).to.equal('a2b2c4d2');
  });
});