// Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?
// Implémente un algorithme pour déterminer si une chaîne ne contient que des caractères uniques. 
// Que se passe-t-il si vous ne pouvez pas utiliser de structures de données supplémentaires ?

const stringEx1 = "ma super phrase";
const stringEx2 = "ma super";

// with extra datastructure "set"
let uniqueChar = (string) => {
  const charSet = new Set();
  for (let char of string) {
    if (charSet.has(char)) {
      return false;
    }
    charSet.add(char);
  }
  return true;
};

console.log('with set :', uniqueChar(stringEx1));
console.log('with set :', uniqueChar(stringEx2));

  // without new datastructure
  let uniqueChar2 = (string) => {
    for (let i = 0; i < string.length; i++) {
      for (let j = i + 1; j < string.length; j++) {
        if (string[i] === string[j]) {
          return false;
        }
      }
    }
    return true;
  };
  
  console.log('without set :', uniqueChar2(stringEx1));
  console.log('without set :', uniqueChar2(stringEx2));