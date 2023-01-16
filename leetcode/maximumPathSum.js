var minPathSum = function (grid) {
  //console.log(grid[0].length);
  let m = grid.length;
  let n = grid[0].length;
  console.log("size", m, n);
  let sum = 0;
  let sum2 = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0) {
        sum = sum + grid[i][j];
        if (j < m) {
          sum2 = sum2 + grid[j][i];
        }
      }
      if (i > 0 && j === n - 1) {
        sum = sum + grid[i][n - 1];
      }
      if (j > 0 && i === m - 1) {
        console.log("enter");
        sum2 = sum2 + grid[m - 1][j];
      }
      //   if (i === 0) {
      //     sum2 = sum2 + grid[j][i];
      //   } else if (j > 0 && i === n - 1) {
      //     sum2 = sum2 + grid[n - 1][i];
      //   }
    }
  }
  console.log(sum, sum2);
  if (sum < sum2) {
    return sum;
  } else {
    return sum2;
  }
};
minPathSum([
  [1, 2, 5],
  [3, 2, 1],
]);
