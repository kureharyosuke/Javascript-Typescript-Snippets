/**
 *
 * @param {Array<number>} arr
 * @param {BooleanConstructor} fn
 * @returns {boolean}
 */
const allTS = (arr: number[], fn?: (x: number) => boolean | undefined) =>
  arr.every(fn as BooleanConstructor);

console.log(
  "allTS",
  allTS([3, 4, 2], (x) => x > 1)
); //allTS true
console.log("allTS", allTS([1, 2, 3])); //allTS true

/**
 *
 * @param {Array<number>} arr
 * @returns {boolean}
 */
const allEqualTS = (arr: Array<number>) => arr.every((val) => val === arr[0]);
console.log("allEqualTS", allEqualTS([1, 2, 3, 4, 5, 6])); // false
console.log("allEqualTS", allEqualTS([1, 1, 1, 1, 1, 1])); // true
