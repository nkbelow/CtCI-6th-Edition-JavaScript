//each solution must first be handwritten 
//minimum of 3 tests per problem
const stringRotation = (s1, s2) => {
  if (s1.length === s2.length) {
    return isSubstring(s1+s1, s2);
  }
  return false;
};