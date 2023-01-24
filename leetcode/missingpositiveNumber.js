const missingpositive = (nums) => {
  let missing = [];
  nums.sort((a, b) => a - b);
  for (i = 0; i < nums.length; i++) {
    if (nums[i] + 1 == nums[i + 1] || i == nums.length - 1) {
      continue;
    } else {
      if (nums[i] + 1 != 0) {
        let result = nums[i] + 1;
        missing.push(result);
      }
    }
  }
  console.log(missing);
};

missingpositive([7, 8, 9, 11, 12]);
