import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  if (date === undefined) return `Unable to determine the time of year!`;
  if (Object.entries(date).length > 0) throw new Error(`Invalid date!`);
  if (Object.prototype.toString.call(date) === "[object Date]") {
    const MONTH = date.getMonth();
    if (MONTH < 2 || MONTH > 10) return `winter`;
    else if(/[2-4]/.test(MONTH)) return `spring`;
    else if(/[5-7]/.test(MONTH)) return `summer`;
    else return `autumn`;
  } throw new Error(`Invalid date!`);
}
