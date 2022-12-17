/**
 *
 * @param {Array<number>} arr
 * @param {BooleanConstructor} fn
 * @returns boolean
 */
const allJS = (arr, fn = Boolean) => arr.every(fn);

console.log(
  "allJS",
  allJS([3, 4, 2], (x) => x > 1)
); //allJS true
console.log("allJS", allJS([1, 2, 3])); //allJS true

/**
 *
 * @param {Array<number>} arr
 * @returns
 */
const allEqualJS = (arr) => arr.every((val) => val === arr[0]);
console.log("allEqualJS", allEqualJS([1, 2, 3, 4, 5, 6])); // false
console.log("allEqualJS", allEqualJS([1, 1, 1, 1, 1, 1])); // true
