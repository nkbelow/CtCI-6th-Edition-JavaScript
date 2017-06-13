//each solution must first be handwritten 
//minimum of 3 tests per problem

module.exports = (string) => {
  const letterStore = {};
  let hasDuplicates = false;
  let result = '';
  for (let char of string) {
    letterStore[char] = letterStore[char] || 0;
    letterStore[char]++;
  }
  for (let letter in letterStore) {
    if (letterStore[letter] > 1) {
      hasDuplicates = true;
    }
    result += letter + letterStore[letter];
  }
  if (!hasDuplicates) {
    return string;
  }
  return result;
};