var capitalizeTitle = function (title) {
  let converted = title.split(" ");
  console.log(converted);
  let i = 0;
  let newArray = [];
  while (converted.length > i) {
    let toUpper;
    if (converted[i].length > 2) {
      let j = 0;
      //   while (converted[i].length > j) {
      //     console.log(converted[i].charAt(j));
      //     j = j + 1;
      //   }
      let splited = converted[i].charCodeAt(j);
      let otherHalf = converted[i].slice(1, converted[i].length).toLowerCase();

      if (splited >= 97 && splited <= 122) {
        let result = splited - 32;
        // console.log(result);
        let stringValue = String.fromCharCode(result);
        console.log(stringValue);
        toUpper = stringValue + otherHalf;
        newArray.push(toUpper);
      } else {
        toUpper = String.fromCharCode(splited) + otherHalf;
        newArray.push(toUpper);
      }
    } else {
      //console.log("enter");
      toUpper = converted[i].toLowerCase();
      newArray.push(toUpper);
    }
    // console.log("new:", toUpper);
    i = i + 1;
  }
  console.log("newArray:", newArray);
  return newArray.join(" ");
};

console.log(capitalizeTitle("i lOve leetcode"));
