export function analyzeArray(arr) {
  if (typeof arr !== "object") {
    return "Please pass an array as a parameter";
  }
  if (arr.length === 0) {
    return `Empty array can not be passed as a parameter`;
  }
  const object = {
    average:
      arr.reduce((a, b) => {
        return a + b;
      }) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
  return object;
}
const result = analyzeArray([1, 8, 3, 4, 2, 6]);
