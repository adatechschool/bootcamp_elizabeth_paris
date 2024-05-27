import { expect, test, describe } from "vitest";
import { calculateMajority } from "./calculateMajority";

describe("calculateMajority", () => {
  test("the majority should be 'Odd Majority'", () => {
    expect(calculateMajority([3, 1, 4, 7])).toStrictEqual("Odd Majority");
    expect(calculateMajority([7, 2, 21, 43, 72])).toStrictEqual("Odd Majority");
  });
  test("the majority should be 'Even Majority'", () => {
    expect(calculateMajority([2, 1, 4, 8])).toStrictEqual("Even Majority");
    expect(calculateMajority([8, 2, 21, 44, 72, 84])).toStrictEqual(
      "Even Majority"
    );
  });
  test("the majority should be highest repeated number", () => {
    expect(calculateMajority([3, 1, 4, 1])).toStrictEqual("1");
    expect(calculateMajority([2, 1, 4, 1, 7, 8, 7, 9, 7])).toStrictEqual("7");
  });
});
