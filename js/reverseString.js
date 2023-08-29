"use strict";

export function reverseString(text) {
  if (typeof text !== "string" || text.length === 0) {
    return `Please enter a text`;
  }
  return text.split("").reverse().join("");
}
const result = reverseString("hello world");
