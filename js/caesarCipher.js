export function caesarCipher(text, num) {
  if (typeof text !== "string" || text.length === 0) {
    return `Please enter a text`;
  }

  text = text.toLowerCase();
  text = text.replace(/[a,z]/g);
  let result = "";
  let charCode = 0;
  for (let i = 0; i < text.length; i++) {
    charCode = text.charCodeAt(i) + num;
    result += String.fromCharCode(charCode);
  }
  return result.replace();
}
const result = caesarCipher("hello", 1);
