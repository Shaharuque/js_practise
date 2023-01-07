var merge = function (nums1, m, nums2, n) {
  for (let i = 0; i < n; i++) {
    nums1.pop();
  }
  //console.log(nums1);
  for (let j = 0; j < n; j++) {
    nums1.push(nums2[j]);
  }
  nums1.sort((a, b) => a - b);
  console.log(nums1);
};

// merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
// merge([1], 1, [], 0);
merge([], 0, [1], 1);
