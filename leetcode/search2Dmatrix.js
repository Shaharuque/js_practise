// var searchMatrix = function (matrix, target) {
//   console.log(matrix, target);
//   let result = false;
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//       console.log(matrix[i][j]);
//       if (matrix[i][j] === target) {
//         result = true;
//         break;
//       } else {
//         continue;
//       }
//     }
//   }
//   return result;
// };

// console.log(
//   searchMatrix(
//     [
//       [1, 3, 5, 7],
//       [10, 11, 16, 20],
//       [23, 30, 34, 60],
//     ],
//     6
//   )
// );

// Search 2D matrix II using seddleBack algorithm(Binary search ar motoe)
//optimized solution
var searchMatrix = function (matrix, target) {
  console.log(matrix, target);
  let row = 0;
  let col = matrix[row].length - 1;
  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] === target) {
      return [row, col];
    }
    //target boro mean initial row tei nai so new row lagbey search korar jnno
    if (matrix[row][col] < target) {
      row = row + 1;
    } else {
      col = col - 1;
    }
  }
  return [-1, -1];
};

console.log(
  searchMatrix(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    5
  )
);
