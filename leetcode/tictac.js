// var tictactoe = function (moves) {
//   for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {}
//   }
// };

// console.log(
//   tictactoe([
//     [0, 0],
//     [2, 0],
//     [1, 1],
//     [2, 1],
//     [2, 2],
//   ])
// );

var rotate = function (matrix) {
  let newArray = [];
  //   for (let i = 0; i < 3; i++) {
  //     for (let j = 0; j < 3; j++) {
  //       console.log("old", matrix[i][j]);
  //     }
  //   }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = matrix.length - 1; j >= 0; j--) {
      newArray.push(matrix[j][i]);
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      matrix[i][j] = newArray[0];
      newArray.shift();
    }
  }

  console.log(matrix);
};

rotate([
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
]);
