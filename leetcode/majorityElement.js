// var majorityElement = function (nums) {};

// majorityElement([3, 2, 3]);

var strStr = function (haystack, needle) {
  let result = haystack.indexOf(needle);
  console.log(result);
};

strStr("leetcode", "leeto");

var divide = function (dividend, divisor) {
  let result = BigInt(dividend) / BigInt(divisor);
  console.log(result);
};

divide(-2147483648, -1);
