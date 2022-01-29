import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  let sum = 0;
  for (let k in s1) {
    if (s2.includes(s1[k])) {
      s2 = s2.replace(s1[k], '');
      sum += 1;
    }
  }
  return sum;
}
