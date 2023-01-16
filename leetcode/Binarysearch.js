const findTarget = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    console.log(left, right);
    let mid = Math.floor((left + right) / 2);
    let result = nums[mid];
    if (result === target) {
      return mid;
    }
    if (result > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};

console.log(findTarget([-1, 0, 3, 5, 9, 12], 9));

//more optimal code writing
// var search = function (nums, target) {
//   let left = 0;
//   let right = nums.length - 1;
//   let mid = Math.floor((left + right) / 2);
//   // for (let i = 0; i < 2; i++) {
//   while (left <= right) {
//     let foundNum = nums[mid];
//     if (foundNum < target) {
//       left = mid + 1;
//     } else if (foundNum > target) {
//       right = mid - 1;
//     } else {
//       return mid;
//     }
//     mid = Math.floor((left + right) / 2);
//   }

//   return -1;
// };
