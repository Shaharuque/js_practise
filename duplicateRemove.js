// const removeDuplicates = (array) => {
//   let uniqueArray = [];
//   let count = [];

//   // Loop through array values
//   for (let value of array) {
//     if (uniqueArray.indexOf(value) === -1) {
//       uniqueArray.push(value);
//       count.push(value);
//     }
//   }
//   for (i = array.length - uniqueArray.length; i < array.length; i++) {
//     uniqueArray.push("_");
//   }
//   const result = count.length;
//   return { result, uniqueArray };
// };

// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

var removeElement = function (nums, val) {
  let uniqueArray = [];
  // Loop through array values
  for (let value of nums) {
    if (uniqueArray.indexOf(value) === -1) {
      uniqueArray.push(value);
    }
  }
  const result = [uniqueArray.length, ...uniqueArray];
  return result;
};
console.log(removeElement([3, 2, 2, 3]));
