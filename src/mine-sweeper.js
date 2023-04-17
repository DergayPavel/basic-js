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
  let newMatrix=[]
  for(let n=0; n<matrix.length; n++){
    newMatrix[n]=[];
    for(let m=0; m<matrix[n].length;m++){
      newMatrix[n][m]=0;
    }
  }
  for(let n=0; n<matrix.length; n++){
    for(let m=0; m<matrix[n].length;m++){
      if(matrix[n][m]===true){
        if(n!=0){
          newMatrix[n-1][m]+=1; 
        }
        if(m!=0){
          newMatrix[n][m-1]+=1; 
        }
        if(n!=matrix.length-1){
          newMatrix[n+1][m]+=1; 
        }
        if(m!=matrix[n].length-1){
          newMatrix[n][m+1]+=1; 
        }
        
        if(n!=0 && m!=0){
          newMatrix[n-1][m-1]+=1; 
        }
        if(n!=matrix.length-1 && m!=matrix[n].length-1){
          newMatrix[n+1][m+1]+=1; 
        }
        if(n!=0 && m!=matrix[n].length-1){
          newMatrix[n-1][m+1]+=1; 
        }
        if(n!=matrix.length-1 && m!=0){
          newMatrix[n+1][m-1]+=1; 
        }
      }
    }
  }
  return newMatrix
}

module.exports = {
  minesweeper
};
