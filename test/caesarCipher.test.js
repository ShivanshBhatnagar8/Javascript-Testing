import { caesarCipher } from "../js/caesarCipher";

test("CAESAR CIPHER TEST 1", () => {
  expect(caesarCipher("hello", 1)).toBe("ifmmp");
});
test("CAESAR CIPHER TEST 2", () => {
  expect(caesarCipher("")).toBe("Please enter a text");
});
test("CAESAR CIPHER TEST 3", () => {
  expect(caesarCipher(4)).toBe("Please enter a text");
});
