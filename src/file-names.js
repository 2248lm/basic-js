const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let result = [];
  let temp = [];
  for (let k of names) {
    if (result.includes(k)) {
      let n = temp.filter(e => e === k).length;
      temp.push(k);
      if (n > 1) {
        result.push(`${k}(${n})`);
      }
      else {
        result.push(`${k}(1)`);
      }
    } else {
      temp.push(k);
      result.push(k);
    }
  }
  return result;
}

module.exports = {
  renameFiles
};
