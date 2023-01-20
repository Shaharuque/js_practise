var missingNumber = function (nums) {
  nums.sort((a, b) => a - b);
  console.log(nums);
  let initial = -1;
  if (nums.length === 1) {
    if (nums[0] === 0) {
      return nums[0] + 1;
    } else {
      return nums[0] - 1;
    }
  } else {
    for (let i = 0; i < nums.length + 1; i++) {
      if (nums[i] === i) {
        initial = nums[i];
      } else {
        initial = initial + 1;
        break;
      }
    }
  }
  return initial;
};

console.log(missingNumber([1, 1]));
