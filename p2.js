// We are required to write a JavaScript function that takes in a
// string that might contain some spaces.
// Our function should reverse the words present in the string internally without
// interchange the characters of two separate words or the spaces.

const str = "this is normal string";
const reverseWordsWithin = (str) => {
  let res = "";
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] != " ") {
      res += str[i];
    }
    if (str[res.length] == " ") {
      res += str[res.length];
    }
  }
  return res;
};
console.log(reverseWordsWithin(str));
