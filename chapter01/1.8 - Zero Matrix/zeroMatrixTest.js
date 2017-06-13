const {expect} = require('chai');
const zeroMatrix = require('./zeroMatrix.js');

describe('should evaluate zeroMatrix function', () => {

  it('should return correct arrays for array of zeros', () => {
    expect(zeroMatrix([[1, 1, 0], [1, 1, 1], [1, 1, 1]])).to.deep.equal([[0, 0, 0], [1, 1, 0], [1, 1, 0]]);
  });

  it('shoudl return correct arrays for 2D arrays', () => {
    expect(zeroMatrix([[1, 0], [0, 1]])).to.deep.equal([[0, 0], [0, 0]]);
  });

});