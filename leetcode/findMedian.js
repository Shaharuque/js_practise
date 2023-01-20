// var findMedianSortedArrays = function (nums1, nums2) {
//   let merge = [].concat(nums1, nums2);

//   merge.sort((a, b) => a - b);
//   console.log(merge);
//   let l = 0;
//   let r = merge.length + 1;
//   let mid = Math.floor((l + r) / 2);
//   console.log("mid", mid);
//   let median = 0;

//   if (merge.length % 2 === 0) {
//     console.log("2 points bigger", merge[mid], merge[mid - 1]);
//     if (merge.length === 2) {
//       console.log("2 points", merge[0], merge[1]);
//       median = (merge[0] + merge[1]) / 2;
//     } else {
//       console.log("enter");
//       let median1 = merge[mid];
//       let median2 = merge[mid - 1];
//       median = median1 - median2 / 2;
//     }
//   } else {
//     median = merge[mid];
//   }
//   console.log(median.toFixed(5));
// };
var findMedianSortedArrays = function (nums1, nums2) {
  let merged = [].concat(nums1, nums2);
  merged.sort((a, b) => a - b);
  console.log("merged", merged);
  let median = 0;
  let arrLen = merged.length;
  if (arrLen % 2 === 0) {
    console.log("enter");
    let med1 = merged[arrLen / 2];
    let med2 = merged[arrLen / 2 - 1];
    console.log(med1, med2);
    median = (med1 + med2) / 2;
  } else {
    median = merged[Math.floor(arrLen / 2)];
  }
  console.log(median.toFixed(5));
};
findMedianSortedArrays([3, 4], [1, 2, 5]);

// var findMedianSortedArrays = function (nums1, nums2) {
//   let mergedarray = [...nums1, ...nums2];
//   //console.log(mergedarray)
//   //let mergedarrayy = nums1.concat(nums2)
//   let sortedarray = mergedarray.sort((a, b) => a - b);
//   console.log(sortedarray);
//   let len = sortedarray.length;
//   console.log(len);
//   if (len % 2 == 0) {
//     let z = len / 2;
//     //console.log(z)
//     let e = sortedarray[z];
//     //console.log(e)
//     let q = sortedarray[z - 1];
//     let ans = (e + q) / 2;
//     return ans;

//     //let mediu = math.floor(m)
//   } else {
//     //odd

//     let x = Math.floor(len / 2);
//     return sortedarray[x];
//   }
// };

// console.log(findMedianSortedArrays([1, 2, 3], [4, 5]));
