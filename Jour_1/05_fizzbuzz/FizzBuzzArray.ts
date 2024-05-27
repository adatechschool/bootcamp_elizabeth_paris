import { fizzBuzz } from "./fizzbuzz";

export function fizzBuzzArray(numArray: number[]) {
  const newArray = numArray.map((number) => {
    return fizzBuzz(number);
  });
  return newArray;
}
