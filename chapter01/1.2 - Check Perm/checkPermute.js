//each solution must first be handwritten 
//minimum of 3 tests per problem

const checkPermute = (string1, string2) => {
  if (string1.length !== string2.length) {
    return false;
  }
  return string1.split('').sort().join('') === string2.split('').sort().join('');
};

module.exports = checkPermute;