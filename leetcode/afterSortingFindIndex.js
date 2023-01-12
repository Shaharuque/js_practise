// var targetIndices = function (nums, target) {
//   nums.sort((a, b) => a - b);
//   console.log(nums);
//   const result = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === target) {
//       result.push(i);
//     }
//   }
//   return result;
// };
// console.log(targetIndices([1, 2, 5, 2, 3], 2));

// pow test
// var myPow = function (x, n) {
//   let result = parseFloat(Math.pow(x, n));
//   console.log(parseFloat(result));
// };

// myPow(2.0, -2);

//superpow
var superPow = function (a, b) {
  let init = String(b[0]);
  for (let i = 1; i < b.length; i++) {
    init = parseInt(init + String(b[i]));
  }
  console.log(init);
  let cb = BigInt(a);
  let cb2 = BigInt(init);
  console.log(cb, cb2);
  // console.log(2147483647n ** 4n);
  let result = cb ** cb2 % BigInt(1337);
  console.log(result);
  return parseInt(result);
  // let num1 = b[0];
  // let num2 = b[1];
  // let convertNum = parseInt(String(num1) + String(num2));
  // console.log(convertNum);
  // let result = Math.pow(a, convertNum);
  // console.log(result);
};

superPow(2147483647, [2, 0, 0]);
