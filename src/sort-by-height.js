const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let newArr=[]
  arr.forEach(elem=>{
    if(elem!=-1){
      newArr.push(elem)
    }
  })
  newArr.sort(function(a, b) {
    return a - b;
  })
  i=0;
  arr=arr.map(elem=>{
    if(elem!=-1){
      elem=newArr[i]
      i++;
    }
    return elem;
  })
  return arr
}

module.exports = {
  sortByHeight
};
