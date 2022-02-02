import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let count = 1, cipher = [];
  for (let k = 1; k < str.length+1; k++) {
    if (str[k] === str[k-1]) {
      count += 1;
    }
    else {
      if (count === 1) {
        cipher.push(str[k-1]);
      }
      else {
        cipher.push(count + str[k-1]);
      }
      count = 1;
    }
  }
  return cipher.join('');
}
