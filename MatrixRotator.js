const Direction = require("./Direction").Direction;

/*  MatrixRotator(matrix)
 *
 *  @param matrix                        a multidimensional array containing the matrix
 *
 *  @public property matrix              the matrix
 *
 *  @public method rotate(direction)     direction is either
 *                                       Direction.CW or Direction.CWW
 *        @returns the rotated matrix
 */
module.exports = class MatrixRotator {
  constructor(matrix) {
    this.matrix = matrix;
  }

  //      |-- Must be Direction.CW
  //      v        or Direction.CCW
  rotate(direction) {
    let newMatrix = [];
    let count = 0;
    let countBack = this.matrix.length - 1;

    for (let i = 0; i < this.matrix.length; i++) {
      newMatrix.push([]);
    }

    if (direction === 'ClockWise') {
      while (count < this.matrix.length) {
        for (let i = this.matrix.length - 1; i >= 0; i--) {
          newMatrix[count].push(this.matrix[i][count]);
        }
        count++;
      }
      this.matrix = newMatrix;

    } else if (direction === 'CounterClockWise') {
      while (count < this.matrix.length) {
        for (let i = 0; i < this.matrix.length; i++) {
          newMatrix[countBack].push(this.matrix[i][count]);
        }
        countBack--;
        count++;
      }
      this.matrix = newMatrix;
    }
  }
};
