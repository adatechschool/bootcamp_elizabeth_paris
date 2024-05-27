export function flip(arrays: number[][], horizental: boolean): number[][] {
  let newArray: number[][] = [];
  if (horizental) {
    for (const array of arrays) {
      newArray.push(array.reverse());
    }
  } else {
    for (let i = arrays.length - 1; i > -1; i--) {
      newArray.push(arrays[i]);
    }
  }
  return newArray;
}
