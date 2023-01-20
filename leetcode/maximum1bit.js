var hammingWeight = function (n) {
  let convertToString = String(n);
  console.log("test", convertToString);
  let i = 0;
  let count = 0;
  while (i < convertToString.length - 1) {
    if (convertToString[i] == "0") {
      console.log("enter");
      count = count + 1;
    }
    i = i + 1;
  }
  return convertToString.length - count;
};
console.log(hammingWeight(00000000000000000000000010000000));
