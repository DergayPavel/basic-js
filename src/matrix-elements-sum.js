const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let summ=0;
  for(let n=0; n<matrix.length;n++){
    for(let m=0; m<matrix[n].length; m++){
      let check=false;
      for(let i=0; i<n; i++){
        if(matrix[i][m]===0){
          check=true
        }
      }
      if(!check){
        summ+=matrix[n][m]
      }
    }
  }
  return summ
}

module.exports = {
  getMatrixElementsSum
};
