//each solution must first be handwritten 
//minimum of 3 tests per problem

module.exports = (string) => {
  const letterCount = {};
  let oddLetterOccurences = 0;
  let eventLetterOccurences = 0;
  for (let letter of string) {
    letterCount[letter] = letterCount[letter] || 0;
    letterCount[letter]++;
  }
  for (let letter in letterCount) {
    if (letterCount[letter] % 2 !== 0) {
      oddLetterOccurences++;
    } else {
      eventLetterOccurences++;
    }
  }
  return oddLetterOccurences <= 1;
};
