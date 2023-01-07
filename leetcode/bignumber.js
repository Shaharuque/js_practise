// var bigi = 41234563232789012327892787227897329n;
// console.log(bigi);

// const plusOne = (digits) => {
//   let newNumber = "";
//   for (let i = 0; i < digits.length; i++) {
//     newNumber += `${digits[i]}`;
//   }
//   console.log(newNumber);
//   let parsed = BigInt(newNumber);
//   console.log(parsed);
//   //   let result = BigInt(parsed);
//   let updatedSum = parsed + BigInt(1);
//   console.log(updatedSum);

//   const arrayOfDigits = Array.from(String(updatedSum), Number);
//   console.log(arrayOfDigits);
// };

// plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]);

//
var searchRange = function (nums, target) {
  var indices = [];

  nums.filter((e, index) => {
    if (e == target) {
      indices.push(index);
    }
  });

  if (indices.length === 0) {
    return [-1, -1];
  } else {
    return indices;
  }
};
console.log(searchRange([1, 3, 3, 5, 6], 3));
