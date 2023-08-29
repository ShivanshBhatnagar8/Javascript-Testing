import { capitalize } from "../js/capitalize";

test("CAPITALIZE TEST 1", () => {
  expect(capitalize("hello")).toBe("Hello");
});
test("CAPITALIZE TEST 2", () => {
  expect(capitalize("HELLO")).toBe("Hello");
});
test("CAPITALIZE TEST 3", () => {
  expect(capitalize("h ello")).toBe("Hello");
});
test("CAPITALIZE TEST 4", () => {
  expect(capitalize("hElLo")).toBe("Hello");
});
test("CAPITALIZE TEST 5", () => {
  expect(capitalize(4)).toBe("Please enter a text");
});
test("CAPITALIZE TEST 6", () => {
  expect(capitalize("")).toBe("Please enter a text");
});
test("CAPITALIZE TEST 7", () => {
  expect(capitalize("hello ")).toBe("Hello");
});
