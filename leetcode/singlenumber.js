// var singleNumber = function (nums) {
//   nums.sort((a, b) => a - b);
//   console.log(nums);
//   let initial = nums[0];
//   for (let i = 0; i < nums.length - 1; i++) {
//     if (initial === nums[i + 1]) {
//       console.log(initial, nums[i + 1]);
//       continue;
//     } else if (initial !== nums[i + 1]) {
//       initial = nums[i + 1];
//     }
//   }
//   console.log("value which has no duplicate", initial);
// };

// singleNumber([2, 2, 1]);

var singleNumber = function (nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i += 2) {
    if (i < nums.length) {
      let result = nums[i + 1] - nums[i];
      if (result == 0) {
        continue;
      } else {
        return nums[i];
      }
    } else if (i === nums.length - 1) {
      return nums[i];
    }
  }
};

console.log(singleNumber([4, 1, 2, 1, 2]));
