//each solution must first be handwritten 
//minimum of 3 tests per problem


const checkReplacement = (string1, string2) => {
  let foundDifference = false;
  for (let i = 0; i < string1.length; i++) {
    if (string1[i] !== string2[i]) {
      if (foundDifference) {
        return false;
      }
      foundDifference = true;
    }
  }
  return true;
};

const checkInsertOrDelete = (string1, string2) => {
  let indexOne = 0;
  let indexTwo = 0;
  let foundDifference = false;
  while (indexOne < string1.length && indexTwo < string2.length) {
    if (string1[indexOne] !== string2[indexTwo]) {
      if (foundDifference) {
        return false;
      } else {
        foundDifference = true;
        indexTwo++;
      }
    } else {
      indexTwo++;
      indexOne++;
    }
  }
  return true;
};

const oneAway = (string1, string2) => {
  if (string1.length === string2.length) {
    return checkReplacement(string1, string2);
  } else if (string1.length + 1 === string2.length) {
    return checkInsertOrDelete(string1, string2);
  } else if (string1.length - 1 === string2.length) {
    return checkInsertOrDelete(string2, string1);
  } else {
    return false;
  }

};

module.exports = {
  checkReplacement,
  checkInsertOrDelete,
  oneAway
};