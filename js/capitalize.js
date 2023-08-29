"use strict";
export function capitalize(text) {
  if (typeof text !== "string" || text.length === 0) {
    return `Please enter a text`;
  }

  text = text.toLowerCase();
  text = text.trim();
  text = text.split(" ").join("");
  return text[0].toUpperCase() + text.slice(1);
}

const result = capitalize("hello");
