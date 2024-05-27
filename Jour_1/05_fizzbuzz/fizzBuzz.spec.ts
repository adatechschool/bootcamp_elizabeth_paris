import { expect, test, describe } from "vitest";
import { fizzBuzz } from "./fizzbuzz";

describe("FizzBuzz", () => {
  test("Should return 'Fizz' if number can be divided by 3", () => {
    expect(fizzBuzz(3)).toStrictEqual("Fizz");
    expect(fizzBuzz(9)).toStrictEqual("Fizz");
  });
  test("Should return 'Buzz' if number can be divided by 5", () => {
    expect(fizzBuzz(5)).toStrictEqual("Buzz");
    expect(fizzBuzz(10)).toStrictEqual("Buzz");
  });
  test("Should return 'Fizzbuzz' if number can be divided by 3 and by 5 ", () => {
    expect(fizzBuzz(15)).toStrictEqual("FizzBuzz");
    expect(fizzBuzz(30)).toStrictEqual("FizzBuzz");
  });
  test("Should return number if number cannot be divided by 3 or by 5 ", () => {
    expect(fizzBuzz(7)).toStrictEqual(7);
    expect(fizzBuzz(11)).toStrictEqual(11);
  });
});
