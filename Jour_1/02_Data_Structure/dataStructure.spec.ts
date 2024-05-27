import { expect, test, describe } from "vitest";
import { dataStructure } from "./dataStructure";

describe("dataStructure", () => {
  test("Should return true if all characters are unique", () => {
    expect(dataStructure("hi world")).toBe(true);
    expect(dataStructure("hi world my nate Zus")).toBe(true);
    expect(dataStructure("hi world, my nate Zus")).toBe(true);
  });
  test("Should return false if a character is not unique", () => {
    expect(dataStructure("hii world")).toBe(false);
    expect(dataStructure("hhello mate")).toBe(false);
    expect(dataStructure("hello, my name is Zoe")).toBe(false);
  });
  expect(dataStructure("hello, my name is, Zoee")).toBe(false);
});
