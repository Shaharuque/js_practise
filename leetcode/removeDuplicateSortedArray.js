var removeDuplicates = function (nums) {
  let count = 0;
  let newarray = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i + 1] && nums[i] == nums[i + 2]) {
      continue;
    }

    // nums[count] = nums[i];
    newarray.push(nums[i]);
    count++;
  }
  console.log(newarray);
  console.log(count);
};
removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]);
