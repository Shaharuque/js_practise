var reverse = function (x) {
  let negative = Math.sign(x);
  let convertInt = 0;
  if (negative === -1) {
    let convertedString = String(x);
    let newNum = convertedString.slice(1, convertedString.length);
    convertInt = parseInt(newNum);
  }

  let reversed_num_positive = 0;
  let reversed_num_Negative = 0;
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
    while (x !== 0) {
      //getting last digit of a number
      let lastDigit = x % 10;
      //
      reversed_num_positive = 10 * reversed_num_positive;
      reversed_num_positive = reversed_num_positive + lastDigit;
      //remove last digit from number
      x = Math.floor(x / 10);
    }
  }
  if (reversed_num_Negative) {
    // if the quotient is strictly greater than 2^31 - 1, then return 0, and if the quotient is strictly less than -231, then return -231.
    return reversed_num_Negative > 0x7fffffff ? 0 : -reversed_num_Negative;
  } else {
    return reversed_num_positive > 0x7fffffff ? 0 : reversed_num_positive;
  }
};

console.log(reverse(-1534236469));
