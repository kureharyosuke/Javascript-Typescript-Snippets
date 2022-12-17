/**
 *
 * @param {Array<number>} arr
 * @param {BooleanConstructor} fn
 * @returns {boolean}
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
 * @returns {boolean}
 */
const allEqualJS = (arr) => arr.every((val) => val === arr[0]);
console.log("allEqualJS", allEqualJS([1, 2, 3, 4, 5, 6])); // false
console.log("allEqualJS", allEqualJS([1, 1, 1, 1, 1, 1])); // true

/**
 *
 * @param {number} v1
 * @param {number} v2
 * @param {number} epsilon
 * @returns {boolean}
 */
const approximatelyEqualJS = (v1, v2, epsilon = 0.001) =>
  Math.abs(v1 - v2) < epsilon;

console.log(
  "approximatelyEqualJS",
  approximatelyEqualJS(Math.PI / 2.0, 1.5708)
); // true
console.log(
  "approximatelyEqualJS",
  approximatelyEqualJS(Math.PI / 2.0, 1.5608)
); // false

console.log(
  `🚀 ~ file: Javascript-Snippets.js:28 ~ Math.PI / 2.0,`,
  Math.PI / 2.0
);
console.log(`🚀 ~ file: Javascript-Snippets.js:28 ~ Math.PI`, Math.PI);

const arrayToCSVJS = (arr, delimiter = ",") =>
  arr.map((v) => v.map((x) => `${x}`).join(delimiter)).join("\n");

console.log(
  "arrayToCSVJS",
  arrayToCSVJS([
    ["a", "b"],
    ["c", "d"],
  ])
);

console.log(
  "arrayToCSVJS",
  arrayToCSVJS(
    [
      ["a", "b"],
      ["c", "d"],
    ],
    ";"
  )
);
