var lastStoneWeight = function (stones) {
  while (stones.length > 1) {
    stones.sort((a, b) => a - b);
    let maxX = stones[stones.length - 2];
    let maxY = stones[stones.length - 1];
    console.log("before", stones);
    if (maxX !== maxY) {
      stones.pop();
      stones.pop();
    }
    console.log(maxX, maxY);
    console.log("after", stones);

    if (maxY >= maxX) {
      if (maxY - maxX === 0) {
        stones.pop();
        stones.pop();
        if (stones.length === 0) {
          return 0;
        } else {
          continue;
        }
      }
      if (maxY > maxX) {
        stones.unshift(maxY - maxX);
      }
    }
  }
  if (stones.length < 2) {
    return stones[0];
  } else {
    return stones;
  }
};
//console.log(lastStoneWeight([2, 2, 4, 5]));

//more efficient solution
// var lastStoneWeight2 = function (stones) {
//   if (stones.length < 2) {
//     return stones[0];
//   }
//   while (stones.length > 2) {
//     let maxY = stones.indexOf(Math.max(...stones));
//     let Y = stones.splice(maxY, 1);
//     console.log(maxY);
//     let maxX = stones.indexOf(Math.max(...stones));
//     let X = stones.splice(maxX, 1);
//     console.log(maxX);
//     stones.push(Y - X);
//   }
//   return stones;
// };
// console.log(lastStoneWeight2([2, 2, 4, 5]));
