import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
let chainArr = [];
export default {
  getLength() {
    return chainArr.length;
  },
  addLink(value) {
    if (value === undefined) {value = `( )`};
    chainArr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof(position) !== 'number' ||
        !Number.isInteger(position) ||
        position <= 0 ||
        position >= chainArr.length) {
          chainArr.length = 0;
          throw new Error(`You can't remove incorrect link!`);
        }
    chainArr.splice(position-1, 1);
    return this;
  },
  reverseChain() {
    chainArr.reverse();
    return this;
  },
  finishChain() {
    let chain = chainArr.join('~~');
    chainArr.length = 0;
    return chain;
  }
}
