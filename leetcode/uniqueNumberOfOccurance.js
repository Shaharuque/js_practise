// var uniqueOccurrences = function (arr) {
//   let count = 0;
//   arr.sort((a, b) => a - b);
//   console.log(arr);
//   let init = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i + 1] !== undefined) {
//       console.log("enter");
//       if (arr[i] === arr[i + 1]) {
//         count = count + 1;
//         arr.shift();
//       } else {
//       }
//     } else {
//       break;
//     }
//   }
//   console.log(count);
//   console.log("array", arr);
// };
// console.log(uniqueOccurrences([1, 2, 2, 1, 4, 5, 5]));

var isPowerOfThree = function (n) {
  // let result=false
  // for(let i=0;i<27;i++){
  //     console.log(Math.pow(3,i))
  //     if(Math.pow(3,i)===n){
  //         result=true
  //         break
  //     }
  //     else{
  //         result=false
  //         continue
  //     }
  // }
  // return result
  while (n > 1) {
    if (n % 3 == 0) {
      n /= 3;
    }
  }
  if (n === 1) {
    return true;
  } else {
    return false;
  }
};
isPowerOfThree(9);
