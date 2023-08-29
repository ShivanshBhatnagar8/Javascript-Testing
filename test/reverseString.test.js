import { reverseString } from "../js/reverseString";

test("REVERSE STRING TEST 1", () => {
  expect(reverseString("hello")).toBe("olleh");
});
test("REVERSE STRING TEST 2", () => {
  expect(reverseString("")).toBe("Please enter a text");
});
test("REVERSE STRING TEST 3", () => {
  expect(reverseString(4)).toBe("Please enter a text");
});
test("REVERSE STRING TEST 3", () => {
  expect(reverseString("hello world")).toBe("dlrow olleh");
});
