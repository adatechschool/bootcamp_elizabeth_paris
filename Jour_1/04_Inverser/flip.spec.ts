import { expect, test, describe } from "vitest";
import { flip } from "./flip";

describe("Inverser", () => {
  test(`
  [[1,2,3],
  [4,5,6],
  [7,8,9]] 
  + horizental shoud equal 
  [[3,2,1],
  [6,5,4],
  [9,8,7]]"`, () => {
    expect(
      flip(
        [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
        ],
        true
      )
    ).toStrictEqual([
      [3, 2, 1],
      [6, 5, 4],
      [9, 8, 7],
    ]);
  });

  test(`
  [[1,2,3],
  [4,5,6],
  [7,8,9]] 
  + horizental shoud equal 
  [[7,8,9],
  [4,5,6],
  [1,2,3]
  ]"`, () => {
    expect(
      flip(
        [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
        ],
        false
      )
    ).toStrictEqual([
      [7, 8, 9],
      [4, 5, 6],
      [1, 2, 3],
    ]);
  });
});
