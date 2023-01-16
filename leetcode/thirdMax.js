var thirdMax = function (nums) {
  nums.sort((a, b) => a - b);
  let max = nums[0];
  let second = nums[0];
  let third = nums[0];

  for (let val of nums) {
    if (val > max) {
      max = val;
    }
  }

  for (let val of nums) {
    if (val < max && val > second) {
      second = val;
    }
  }

  if (nums.length > 2) {
    for (let val of nums) {
      if (val < second && val > third) {
        third = val;
      }
    }
  }
  console.log(max, second, third);
  if (
    nums.length === 2 ||
    max === second ||
    max === third ||
    second === third
  ) {
    return max;
  } else {
    return third;
  }
};
console.log(thirdMax([1, 1, 2]));
