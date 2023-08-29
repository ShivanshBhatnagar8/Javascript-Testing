import { calculator } from "../js/calculator";

test("CALCULATOR TEST 1", () => {
  expect(calculator.add(2, 3)).toBe(5);
});
test("CALCULATOR TEST 2", () => {
  expect(calculator.subtract(5, 3)).toBe(2);
});
test("CALCULATOR TEST 3", () => {
  expect(calculator.multiply(2, 3)).toBe(6);
});
test("CALCULATOR TEST 4", () => {
  expect(calculator.divide(27, 3)).toBe(9);
});
