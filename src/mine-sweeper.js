const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let result = JSON.parse(JSON.stringify(matrix));
  for (let j in result[0]) {
    for (let k of result) {
      if (k[j]) {
        k[j] = 1;
      } else {
        k[j] = 0;
      }
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j]) {
        if (matrix[i][j - 1] !== undefined && !matrix[i][j - 1]) ++result[i][j - 1];
        if (matrix[i][j + 1] !== undefined && !matrix[i][j + 1]) ++result[i][j + 1];
        if (!!matrix[i - 1] !== false && !matrix[i - 1][j]) ++result[i - 1][j];
        if (!!matrix[i + 1] !== false && !matrix[i + 1][j]) ++result[i + 1][j];
      }
    }
  }
  let l = 0, n = 0;
  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result[0].length; j++) {
      if (result[i][j] === 0) {
        if (result[i][j - 1] !== undefined) {
          result[i][j - 1] > 0 ? l = result[i][j - 1] : l;
          l < n && n !== 0 ? n = l : n === 0 ? n = l : l;
        }
        if (result[i][j + 1] !== undefined) {
          result[i][j + 1] > 0 ? l = result[i][j + 1] : l;
          l < n && n !== 0 ? n = l : n === 0 ? n = l : l;
        }
        if (!!result[i - 1] !== false) {
          result[i - 1][j] > 0 ? l = result[i - 1][j] : l;
          l < n && n !== 0 ? n = l : n === 0 ? n = l : l;
        }
        if (!!result[i + 1] !== false) {
          result[i + 1][j] > 0 ? l = result[i + 1][j] : l;
          l < n && n !== 0 ? n = l : n === 0 ? n = l : l;
        }
        result[i][j] = n;
      }
    }
  }
  return result;
}

module.exports = {
  minesweeper
};
