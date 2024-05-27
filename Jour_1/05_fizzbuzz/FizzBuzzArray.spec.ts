import { expect, test, describe } from "vitest";
import { fizzBuzzArray } from "./fizzBuzzArray";

describe("FizzBuzzArray", () => {
  test("Should return [1,2,'Fizz] if Array is [1,2,3]", () => {
    expect(fizzBuzzArray([1, 2, 3])).toStrictEqual([1, 2, "Fizz"]);
    expect(fizzBuzzArray([1, 2, 3, 4, 5])).toStrictEqual([
      1,
      2,
      "Fizz",
      4,
      "Buzz",
    ]);
    expect(fizzBuzzArray([1, 2, 3, 4, 5, 15])).toStrictEqual([
      1,
      2,
      "Fizz",
      4,
      "Buzz",
      "FizzBuzz",
    ]);
  });
});
