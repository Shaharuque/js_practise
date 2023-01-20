var reverseWords = function (s) {
  let newArray = s.trim();
  console.log("after trimmig:", newArray);
  let result = newArray.split(" ");
  console.log(result);
  let finalResult = "";
  for (let i = result.length - 1; i >= 0; i--) {
    //jodi trim korar por o space thakey sheita badh dewar way
    if (result[i] !== "") {
      finalResult = finalResult + " " + result[i];
    }
  }
  console.log(finalResult.trim());
};
reverseWords("a good   example");
