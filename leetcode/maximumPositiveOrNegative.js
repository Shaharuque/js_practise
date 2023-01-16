var maximumCount = function (nums) {
  console.log(nums);
  let newArray = [];
  let pCount = 0;
  let nCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      newArray.push("true");
      pCount++;
    } else if (nums[i] === 0) {
      continue;
    } else {
      newArray.push("false");
      nCount++;
    }
  }
  if (pCount > nCount) {
    return pCount;
  } else if (nCount > pCount) {
    return nCount;
  } else {
    return pCount;
  }
};

console.log(maximumCount([-3, -2, -1, 0, 0, 1, 2]));
