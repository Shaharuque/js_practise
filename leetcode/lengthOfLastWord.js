var lengthOfLastWord = function (s) {
  let newArray = [];
  let result = s.split(" ");
  for (let i = result.length - 1; i >= 0; i--) {
    if (result[i] === "") {
      continue;
    } else {
      newArray.push(result[i]);
    }
  }
  return newArray[0].length;
};
console.log(lengthOfLastWord("luffy is still joyboy"));
