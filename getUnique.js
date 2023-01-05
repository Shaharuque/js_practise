// let arr = [3, 26, 1, 2, 3, 44, 57, 87, 1];

// const fixArray = (array) => {
//   let uniqueArray = [];

//   // Loop through array values
//   for (let value of array) {
//     if (uniqueArray.indexOf(value) === -1) {
//       //unique array tey particular 'value' jodi na thakey thaley 'value' will be pushed
//       uniqueArray.push(value);
//     }
//   }
//   //sorting the unique array in ascending order
//   uniqueArray.sort(function (a, b) {
//     return a - b;
//   });
//   return uniqueArray;
// };

// let fixedArray = fixArray(arr);
// console.log("final result", fixedArray);

var removeElement = function (nums, val) {
  let uniqueArray = [];
  // Loop through array values
  for (let value of nums) {
    if (value !== val) {
      uniqueArray.push(value);
    }
  }
  const result = `${uniqueArray.length}${[...uniqueArray]}`;
  return uniqueArray;
};

console.log(removeElement([3, 2, 2, 3], 3));
