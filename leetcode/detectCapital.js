var detectCapitalUse = function (word) {
  let flag = false;
  console.log(word.length);
  let i = 0;
  while (word.length > i) {
    // console.log("enter");
    // console.log(word.charCodeAt(i));
    //if first letter is upper or lower
    if (word.charCodeAt(0) >= 65 && word.charCodeAt(0) <= 90) {
      //all capital
      //   if (word.charCodeAt(i) >= 65 && word.charCodeAt(i) <= 90) {
      //     console.log(word[i]);
      //     flag = true;
      //   }
      if (word.charCodeAt(i + 1) >= 97 && word.charCodeAt(i + 1) <= 122) {
        flag = true;
      }
    }

    //all lower
    if (word.charCodeAt(i) >= 97 && word.charCodeAt(i) <= 122) {
      flag = true;
    }
    //else
    else {
      flag = false;
      break;
    }

    i = i + 1;
  }
  console.log(flag);
};

detectCapitalUse("aAD");
