const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (Object.keys(options).length > 0) {
    let addArr = [];
    let newAdd = '';
    let arr = [];
    
    if (options.hasOwnProperty('addition')) {
      let stringAdd = String(options.addition);

      if (!options.additionRepeatTimes) {
        addArr.push(stringAdd);
      } else {
        for (let i = 0; i < options.additionRepeatTimes; i++) {
          addArr.push(stringAdd);
        }
      }
      if(options.additionSeparator ){
        newAdd = addArr.join(options.additionSeparator)
      }
      else{
         newAdd = addArr.join('|')
      }
    }

    if (!options.repeatTimes) {
      arr.push(str + newAdd);
    } else {
      for (let i = 0; i < options.repeatTimes; i++) {
        arr.push(str + newAdd);
      }
    }
    

    return arr.join(options.separator ? options.separator : '+');

  } else {
    return str;
  }
}

module.exports = {
  repeater
};
