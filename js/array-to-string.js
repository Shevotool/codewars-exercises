/* 8 kyu Convert a string to an array */

/* 
Write a function to split a string and convert it into an array of words.

Examples (Input ==> Output):
"Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
*/

function stringToArray(string) {
  let str = "";
  let array = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== " ") {
      str += string[i];
    } else {
      array.push(str);
      str = "";
    }
  }
  array.push(str);
  return array;
}
