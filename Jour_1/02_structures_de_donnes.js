// Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?
// Implémente un algorithme pour déterminer si une chaîne ne contient que des caractères uniques. 
// Que se passe-t-il si vous ne pouvez pas utiliser de structures de données supplémentaires ?

const stringEx1 = "ma super phrase";
const stringEx2 = "ma super";

// bien poser d'abord les exclusions/questions
// lower/uppercase sont perçues comme identiques ou non ?

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
    if (string.length > 128) {
      // si ça dépasse le nombre de caratères du jeu de caratères (ascii, alphanum), il y a forcément du doublon ! maliiiiiin
      return true;
    }
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