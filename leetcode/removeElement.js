var removeElement = function (nums, val) {
  let uniqueArray = [];
  // Loop through array values
  let result = nums.filter((e) => e !== val);

  return result;
};
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
