//each solution must first be handwritten 
//minimum of 3 tests per problem

const zeroMatrix = (arrays) => {
  const rows = {};
  const cols = {};
  arrays.forEach((array, i) => {
    array.forEach((element, j) => {
      if (element === 0) {
        rows[i] = true;
        cols[j] = true;
      }
    });
  });
  arrays.forEach((array, i) => {
    array.forEach((element, j) => {
      if (rows[i] || cols[j]) {
        arrays[i][j] = 0;
      }
    });
  });
  return arrays;
};

module.exports = zeroMatrix;