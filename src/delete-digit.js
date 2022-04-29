const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let numLength = String(n).length - 1;
  let numDigitBefore, numDigitAfter, numBefore, numAfter, numGeneral, numMax;

  numDigitAfter = 10 ** numLength;
  numMax = n % numDigitAfter;
  numDigitBefore = numDigitAfter;

  for (let k = 1; k < numLength; k++) {
    numDigitAfter = Math.pow(10, (numLength - k));
    numBefore = Math.floor(n / numDigitBefore);
    numAfter = n % numDigitAfter;
    numGeneral = Number(String(numBefore) + String(numAfter));
    numDigitBefore = numDigitAfter;
    if (numGeneral > numMax) {
      numMax = numGeneral;
    }
  }

  numGeneral = Math.floor(n / 10);
  if (numGeneral > numMax) {
    numMax = numGeneral;
  }
  return numMax;
}

module.exports = {
  deleteDigit
};
