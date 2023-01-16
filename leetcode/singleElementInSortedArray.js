var searchRange = function (nums) {
  for (let i = 0; i < nums.length; ) {
    if (nums[i] === nums[i + 1]) {
      nums.shift();
      nums.shift();
      i = 0;
    } else {
      break;
    }
  }
  console.log(nums);
  return nums[0];
};

console.log(searchRange([3, 3, 7, 7, 10, 11, 11]));
//console.log(searchRange([1, 1, 2, 3, 3, 4, 4, 8, 8]));
