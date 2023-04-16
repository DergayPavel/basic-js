const { NotImplementedError } = require('../extensions/index.js');

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
function getSeason(date) {
  let month = date.getMonth()
  if (typeof (month)!=='number'){
    return 'Invalid date!'
  }
  if(month<2 || month === 11){
    return 'winter'
  }
  if(month<5){
    return 'spring'
  }
  if(month<8){
    return 'summer'
  }
  if(month<11){
    return 'autumn'
  }
}

module.exports = {
  getSeason
};
