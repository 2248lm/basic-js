import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
export default function getEmailDomain(email) {
  let index = 0;
  let k = email.length;
  while (index === 0) {
    if (email[k] === '@') index = k;
    k--;
  }
  return email.slice(index + 1);
}
