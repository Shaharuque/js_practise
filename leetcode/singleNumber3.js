var singleNumber = function (nums) {
  let k = 2;
  let newArray = [];
  nums.sort((a, b) => a - b);
  console.log("after sort", nums);
  for (let i = 0; i < nums.length; i += k) {
    if (i < nums.length) {
      let result = nums[i + 1] - nums[i];
      if (result == 0) {
        continue;
      } else {
        // newArray.push(nums[i]);
        // newArray.push(nums[i + 1]);
        newArray.push(nums[i]);
        let result = nums[i + 1] - nums[i];
        if (result === 0) {
          continue;
        } else {
          newArray.push(nums[i + 1]);
          k = 1;
        }
      }
    }
  }

  console.log(newArray);
  //   return newArray;
};

// singleNumber([1, 2, 1, 3, 2, 5]);
singleNumber([0, 1, 1, 2]);
