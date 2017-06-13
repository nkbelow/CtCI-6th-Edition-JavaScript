//each solution must first be handwritten 
//minimum of 3 tests per problem

const rotateMatrix = (matrix) => {
  for (let i = 0; i < matrix.length / 2; i++) {
    for (let j = i; j < matrix.length - i - 1; j++) {
      let TL = matrix[i][j];
      let TR = matrix[j][matrix.length - i - 1];
      let BR = matrix[matrix.length - i - 1][matrix.length - j - 1];
      let BL = matrix[matrix.length - j - 1][i];
      matrix[j][matrix.length - i - 1] = TL;
      matrix[matrix.length - i - 1][matrix.length - j - 1] = TR;
      matrix[matrix.length - j - 1][i] = BR;
      matrix[i][j] = BL;
    }
  }
  return matrix;
};

module.exports = rotateMatrix;