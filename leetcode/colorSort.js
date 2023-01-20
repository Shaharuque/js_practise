var sortColors = function (nums) {
  // let target = 0;
  // let i = 0;
  // const empty = (arr) => (arr.length = 0);
  // let countArray = [];
  // countArray = nums.filter((e) => e === 0);
  // countArray.push(...nums.filter((e) => e === 1));
  // countArray.push(...nums.filter((e) => e === 2));
  // empty(nums);
  // nums = countArray;

  // return nums;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        let temp;
        temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
        console.log(nums);
      }
    }
  }
  // console.log(nums);
};
console.log(sortColors([2, 0, 2, 1, 1, 0]));
