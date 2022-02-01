import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  let domainsArray = domains.map(str => str.split(".")).sort((a, b) => (b.length - a.length));
  let domainsObject = {};

  let checkDomains = (checkArr) => {
    checkArr.forEach(arr => {
      if (!domainsObject[`.${arr[arr.length-1]}`]) {
        domainsObject[`.${arr[arr.length-1]}`] = `.${arr[arr.length-1]}`;
        domainsObject[`.${arr[arr.length-1]}`] = 1;
      }
      else {domainsObject[`.${arr[arr.length-1]}`] += 1;}
    })

    checkArr = checkArr.map((e, i) => {
      if (e.length !== 1) {
        let temporary = `${e[e.length-1]}.${e[e.length-2]}`;
        e.splice(-2);
        e.push(temporary);
        return e;
      }
      else {checkArr.splice([i]);}
    })
  }

  while (domainsArray.length !== 0) {
    checkDomains(domainsArray)
  };

  return domainsObject;
}
