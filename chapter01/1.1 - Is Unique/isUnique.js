//each solution must first be handwritten 
//minimum of 3 tests per problem
const isUniq = (string) => {
  let letterCount = {};
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (char !== ' ') {
      letterCount[char] = letterCount[char] || 0;
      letterCount[char]++;
    }
  }
  for (let letter in letterCount) {
    if (letterCount[letter] > 1) {
      return false;
    }
  }
  return true;  
};

//without using an extra DS 

const isUniqWithoutDS = (string) => {
  for (var i = 0; i < string.length; i++) {
    for (var j = i + 1; j < string.length; i++) {
      if (string[i] === string[j]) {
        return false;
      }
    }
  }
  return true;
};

module.exports = {isUniq, isUniqWithoutDS};