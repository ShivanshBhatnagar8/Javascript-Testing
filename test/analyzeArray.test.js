import { analyzeArray } from "../js/analyzeArray";

test("ANALYZE ARRAY TEST 1", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
test("ANALYZE ARRAY TEST 2", () => {
  expect(analyzeArray([])).toBe(`Empty array can not be passed as a parameter`);
});
test("ANALYZE ARRAY TEST 3", () => {
  expect(analyzeArray(4)).toBe(`Please pass an array as a parameter`);
});
