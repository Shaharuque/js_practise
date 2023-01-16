var findMin = function (nums) {
  nums.sort((a, b) => a - b);
  return nums[0];
};

console.log(findMin([11, 13, 15, 17]));
