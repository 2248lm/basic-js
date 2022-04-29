const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error(`'arr' parameter must be an instance of the Array!`);
  if (arr.length === 0) return arr;
  let result = [];
  for (let k = 0; k < arr.length; k++) {
    if (arr[k] === '--discard-next') {
      if (k !== arr.length - 1) k += 2;
      else k += 1;
      continue;
    }
    if (arr[k] === '--discard-prev') {
      result.splice(-1);
      k += 1;
    }
    if (arr[k] === '--double-prev') {
      if (k !== 0) result.push(arr[k - 1]);
      k += 1;
    }
    if (arr[k] === '--double-next') {
      if (k !== arr.length - 1) result.push(arr[k + 1]);
    }
    else result.push(arr[k]);
  }
  return result;
}

module.exports = {
  transform
};
