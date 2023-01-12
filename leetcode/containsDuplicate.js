var containsDuplicate = function (nums) {
  console.log(nums);
  let newArray = [...new Set(nums)]; //creating array of unique elements
  console.log(newArray);
  if (newArray.length !== nums.length) {
    return true;
  } else {
    return false;
  }
};
containsDuplicate([1, 2, 3, 1]);
