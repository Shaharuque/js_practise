var removeDuplicates = function (s) {
  let arr = s.split("");
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      arr.splice(i, 2);
      i = -1;
    } else {
      continue;
    }
  }
  console.log(arr.join(""));
};
removeDuplicates("abcbb");
