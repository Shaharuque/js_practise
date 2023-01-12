// var searchRange = function (nums, target) {
//   const result = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === target) {
//       //   result.push(nums.indexOf(nums[i]));
//       result.push(nums[i]);
//     }
//   }
//   return result;
// };

var searchRange = function (nums, target) {
  resultIndex = [];
  nums.filter((item, index) => {
    // console.log(item, index);
    if (item === target) {
      resultIndex.push(index);
    }
  });
  if (resultIndex.length === 0) {
    return [-1, -1];
  } else if (resultIndex.length === 1) {
    return [resultIndex[0], resultIndex[0]];
  } else if (resultIndex.length > 2) {
    return [resultIndex[0], resultIndex[resultIndex.length - 1]];
  } else {
    return resultIndex;
  }
};

console.log(searchRange([1], 1));
