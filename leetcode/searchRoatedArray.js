var search = function (nums, target) {
  let result = null;
  if (nums.length === 0) {
    return -1;
  } else {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === target) {
        result = i;
      }
    }

    if (result === null) {
      return -1;
    } else {
      return result;
    }
  }
};
console.log(search([4, 5, 6, 7, 0, 1, 2], 100));
