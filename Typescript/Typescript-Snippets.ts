/**
 *
 * @param {Array<number>} arr
 * @param {BooleanConstructor} fn
 * @returns {boolean}
 */
const allTS = (
  arr: number[],
  fn?: (x: number) => boolean | undefined
): boolean => arr.every(fn as BooleanConstructor);

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
const allEqualTS = (arr: Array<number>): boolean =>
  arr.every((val) => val === arr[0]);
console.log("allEqualTS", allEqualTS([1, 2, 3, 4, 5, 6])); // false
console.log("allEqualTS", allEqualTS([1, 1, 1, 1, 1, 1])); // true

/**
 *
 * @param {number} v1
 * @param {number} v2
 * @param {number} epsilon
 * @returns {boolean}
 */
const approximatelyEqualTS = (
  v1: number,
  v2: number,
  epsilon: number = 0.001
): boolean => Math.abs(v1 - v2) < epsilon;
