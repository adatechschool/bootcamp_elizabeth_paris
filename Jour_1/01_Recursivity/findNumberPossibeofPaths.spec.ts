import { expect, test, describe } from "vitest";
import { findNumberPossibeofPaths } from "./findNumberPossibeofPaths";

describe("findPath", () => {
  test("Should return possible way of climbing a number of stairs", () => {
    expect(findNumberPossibeofPaths(3)).toStrictEqual(4);
    expect(findNumberPossibeofPaths(5)).toStrictEqual(13);
    expect(findNumberPossibeofPaths(10)).toStrictEqual(274);
  });
});
