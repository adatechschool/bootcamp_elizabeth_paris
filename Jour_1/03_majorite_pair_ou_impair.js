/* Majorité, pairs ou impair ?
[Source: Newsletter de Cassidoo](https://cassidoo.co/)

Donner l'élément qui apparaît le plus fréquemment dans un tableau d'entiers.
S'il n'y a pas d'élément qui apparaît plus qu'un autre, retourner une information indiquant si le tableau est composé en majorité de nombres pairs ou impairs.
Si le tableau n'a pas de majorité et qu'il n'a pas plus d'éléments pairs qu'impairs, retourner 0

Exemple
> majority([3,1,4,1])
> "1"

> majority([33,44,55,66,77])
> "Majorité impairs"

> majority([1,2,3,4])
> "Pas de majorité"
*/

const array1 = [3, 1, 4, 1];
const array2 = [33, 44, 55, 66, 77];
const array3 = [1, 2, 3, 4];

// 1. Donner l'élément qui apparaît le plus fréquemment dans un tableau d'entiers.

let searchMajority = (array) => {
  const elementCount = new Map();

  // feed the map
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (elementCount.has(element)) {
      elementCount.set(element, elementCount.get(element) + 1);
    } else {
      elementCount.set(element, 1);
    }
  }

  // find max occ
  let maxCount = 0;
  let mostDuplicates = null;

  elementCount.forEach((count, element) => {
    if (count > maxCount) {
      maxCount = count;
      mostDuplicates = element;
    }
  });
  if (maxCount > 1) {
    return `Most duplicated: ${mostDuplicates}`;
  } else {
    return searchMaxPair(array);
  }
};

// 2. retourner une information indiquant si le tableau est composé en majorité de nombres pairs ou impairs.
let searchMaxPair = (array) => {
  let evenCount = 0;
  for (const int of array) {
    result = int % 2;
    if (result === 0) {
      evenCount += 1;
    }
  }
  if (evenCount > array.length / 2) {
    return "Majority even";
  } else if (evenCount < array.length / 2) {
    return "Majority odd";
  } else {
    // 3. Si le tableau n'a pas de majorité et qu'il n'a pas plus d'éléments pairs qu'impairs, retourner 0
    return "No majority";
  }
};

console.log(searchMajority(array1));
console.log(searchMajority(array2));
console.log(searchMajority(array3));