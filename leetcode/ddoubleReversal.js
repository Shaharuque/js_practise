//ai problem a negative number test case dorkar porey nai
var isSameAfterReversals = function (num) {
  let initialNumber = num;
  let negative = Math.sign(num);

  let convertInt = 0;
  if (negative === -1) {
    let convertedString = String(num);
    let newNum = convertedString.slice(1, convertedString.length);
    convertInt = parseInt(newNum);
  }

  let reversed_num_positive = 0;
  let reversed_num_Negative = 0;

  let reversed_num_positive2 = 0;
  let reversed_num_Negative2 = 0;
  if (negative === -1) {
    while (convertInt !== 0) {
      //getting last digit of a number
      let lastDigit = convertInt % 10;

      reversed_num_Negative = 10 * reversed_num_Negative;
      reversed_num_Negative = reversed_num_Negative + lastDigit;
      //remove last digit from number
      convertInt = Math.floor(convertInt / 10);
    }
  } else {
    while (num !== 0) {
      //getting last digit of a number
      let lastDigit = num % 10;
      //
      reversed_num_positive = 10 * reversed_num_positive;
      reversed_num_positive = reversed_num_positive + lastDigit;
      //remove last digit from number
      num = Math.floor(num / 10);
    }
  }
  console.log("after 1st reverse", reversed_num_positive);
  console.log("after 1st reverse", reversed_num_Negative);
  if (reversed_num_Negative) {
    // return reversed_num_Negative > 0num7fffffff ? 0 : -reversed_num_Negative;
    console.log("entered");
  } else {
    while (reversed_num_positive !== 0) {
      //getting last digit of a number
      let lastDigit = reversed_num_positive % 10;

      reversed_num_positive2 = 10 * reversed_num_positive2;
      reversed_num_positive2 = reversed_num_positive2 + lastDigit;
      //remove last digit from number
      reversed_num_positive = Math.floor(reversed_num_positive / 10);
      console.log("-", reversed_num_positive2);
    }
  }

  console.log(reversed_num_positive2, initialNumber);
  if (reversed_num_positive2 === initialNumber) {
    return true;
  } else {
    return false;
  }
};

console.log(isSameAfterReversals(1800));
