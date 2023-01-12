var thirdMax = function (nums) {
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

  for (let val of nums) {
    if (val < second && val > third) {
      third = val;
    }
  }
  //   if (nums.length <= 2) {
  //     return max;
  //   } else {
  //     return third;
  //   }
  console.log(max);
  console.log(second);
  console.log(third);
};

thirdMax([2, 8, 3, 1, 9]);
