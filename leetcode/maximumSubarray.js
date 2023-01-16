// Brute force solution
// var maxSubArray = function (nums) {
//
//   console.log(nums);
//   let newArray = [];
//   for (let i = 0; i < nums.length + 1; i++) {
//     let maked = [];
//     for (let j = 0; j < i; j++) {
//       maked.push(nums[j]);
//     }
//     newArray.push(maked);
//   }
//   console.log(newArray);

//   let sum = 0;
//   for (let k = 1; k < newArray.length; k++) {
//     let internalSum = 0;
//     for (let l = 0; l < newArray[k].length; l++) {
//       internalSum += newArray[k][l];
//     }
//     if (internalSum > sum) {
//       sum = internalSum;
//     }
//   }
//   console.log(sum);
// };
// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// 1.
// Maximum sub-array Kadane's Algorithm(optimal sol)
// 1.maxSum=array[0]
// 2.currentSum=array[0]
// 3.loop will be run through 1 to last index
// And currentSum=Maximum of (array[i],currentSum+array[i])
// 4.Then compare maxSum and currentSum and if currentSum is greater then replace maxSum with currentSum
// 5.After loop end return the maxSum
// var maxSubArray = function (nums) {
//   let currentSum = nums[0];
//   let maxSum = nums[0];
//   for (let i = 1; i < nums.length; i++) {
//     currentSum = Math.max(nums[i], nums[i] + currentSum);

//     if (currentSum > maxSum) {
//       maxSum = currentSum;
//     }
//   }
//   return maxSum;
// };
// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

//2.maximum product from subarray
//I think that for a vector of N elements the total number of subarrays is N*(N+1)/2.
//Who has the largest product find the sub array
// var maxSubArray = function (nums) {
//   let currentSum = Math.max(...nums);
//   let maxSum = 1;
//   let minSum = 1;
//   for (let i = 0; i < nums.length; i++) {
//     let temp = nums[i] * maxSum;
//     maxSum = Math.max(nums[i] * maxSum, nums[i] * minSum, nums[i]);
//     minSum = Math.min(temp, nums[i] * minSum, nums[i]);
//     console.log("before", currentSum);

//     currentSum = Math.max(currentSum, maxSum);
//     console.log("after", currentSum);
//   }
//   return currentSum;
// };
// console.log(maxSubArray([-4, -3, -2]));

//3.get new concated array
// var getConcatenation = function (nums) {
//   let newArray = [...nums];
//   for (let i = 0; i < nums.length; i++) {
//     newArray.push(nums[i]);
//   }
//   console.log(newArray);
//   return nums;
// };

// getConcatenation([1, 2, 1]);

//4.
var zeroFilledSubarray = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      count++;
    }
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] == 0) {
        if (nums[i] === nums[j]) {
          count++;
        }
      }
    }
  }
  console.log(count);
};
zeroFilledSubarray([0, 0, 0, 2, 0, 0]);
