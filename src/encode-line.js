const { NotImplementedError } = require('../extensions/index.js');

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
function encodeLine(str) {
  let encoding = "";
  let count;
  for(let i=0; i<str.length; i++){
    count = 1;
    while (str[i]==str[i+1]){
      count++;
      i++;
    }
    if(count!=1){
      encoding += count
    }
    encoding +=str[i];
  }
  return encoding;
}

module.exports = {
  encodeLine
};
