const {expect} = require('chai');
const rotateMatrix = require('./rotateMatrix.js');

describe('it should evaluate rotateMatrix function', () => {

  it('should return a rotated matrix for two by two', () => {
    const twoByTwo = [[1, 2], [3, 4]];
    expect(rotateMatrix(twoByTwo)[0][0]).to.equal(3);
  });

  it('should return a rotated matrix for 3 by 3', () => {
    const threeByThree = [[1,2,3], [4,5,6], [7,8,9]];
    expect(rotateMatrix(threeByThree)).to.deep.equal([[7, 4, 1], [8, 5, 2], [9, 6, 3]]);
  });
});