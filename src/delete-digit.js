const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let newArr=[];
  n=String(n);
  let k=0;
  for(let i=0; i<n.length;i++){
    newArr[k]=''
    for(let m=0; m<n.length;m++){
      if(i!=m){
        newArr[k]+=n[m]
      }
    }
    k++
  }
  for(let i=0; i<newArr.length;i++){
    newArr[i]=Number(newArr[i])
  }
  newArr.sort((a,b)=>{
    return a-b
  })
  return newArr[newArr.length-1]
}

module.exports = {
  deleteDigit
};
