/* 8 kyu Beginner - Reduce but Grow */

/* 
DESCRIPTION:
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
*/

function grow(array) {
  let result = array[0];
  for (let i = 1; i < array.length; i++) {
    result *= array[i];
  }
  return result;
}
