// var sortColors = function (nums) {
//   let minNum = nums[0];
//   for (let i = 0; i < nums.length; i++) {}
// };
// sortColors([2, 0, 2, 1, 1, 0]);

// reverse array string
//var reverseString = function (s) {
//   let p = [...s];
//   for (let i = 0; i < s.length; i++) {
//     let r = s.length - (i + 1);
//     s[i] = p[r];
//   }
//   console.log(s);
// };
// reverseString(["H", "a", "n", "n", "a", "h"]);

//reverse only vowel
var reverseVowels = function (s) {
  let q = "";
  for (let i = 0; i < s.length; i++) {
    let r = s.length - i;
    if (
      s[i] === "a" ||
      s[i] === "e" ||
      s[i] === "i" ||
      s[i] === "o" ||
      s[i] === "i" ||
      s[i] === "u"
    ) {
      console.log("enter", s[i]);
      console.log("enter", r);
      console.log("enter", i);
      if (
        s[i] === "a" ||
        s[i] === "e" ||
        s[i] === "i" ||
        s[i] === "o" ||
        s[i] === "i" ||
        s[i] === "u"
      ) {
        q += s[r];
      } else {
      }
    } else {
      q += s[i];
    }
  }

  // for (let i = 0; i < s.length; i++) {
  //   let r = s.length - (i + 1);
  //   console.log(s[i], s[r]);
  //   q += s[r];
  // }
  console.log("result", q);
  // return s;
};

console.log(reverseVowels("leetcode"));
