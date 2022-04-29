const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  if (matrix.length < 1) return 0;
  let catsCountArr = matrix.map(arr => arr.filter(e => e === "^^").length);
  return catsCountArr.reduce((a, b) => a + b);

  //let sum = 0;
  //matrix.flat().map(e => e === "^^" ? ++sum : sum);
  //return sum;
}

module.exports = {
  countCats
};
