// var countPrimes = function (n) {
//   let result = [];
//   if (n < 3) {
//     return 0;
//   } else {
//     for (let i = 2; i < n; i++) {
//       if (i % 2 == 0) {
//         continue;
//       } else {
//         result.push(i);
//       }
//     }
//   }
//   return result;
// };

var countPrimes = function (n) {
  let isPrime = true;
  let primeNumbers = [];
  if (n < 3) {
    return 0;
  }
  //else {
  //   for (let i = 2; i < n; i++) {
  //     for (let j = 2; j < i - 1; j++) {
  //       if (i % j === 0) {
  //         isPrime = false;
  //         break;
  //       }
  //     }
  //     if (isPrime) {
  //       primeNumbers.push(i);
  //     }
  //     isPrime = true;
  //   }
  // }
  else {
    //assume all array index prime=true
    // let prime = Array.from({ length: n }, (_) => true);
    let prime = [];
    for (let i = 2; i < n; i++) {
      prime[i] = true;
    }

    for (let i = 2; i <= n; i++) {
      if (prime[i] == true) {
        for (let j = i * i; j < n; j += i) {
          prime[j] = false;
        }
        primeNumbers.push(i);
      }
    }
    // for (let k = 2; k < n; k++) {
    //   if (prime[k] == true) {
    //     primeNumbers.push(k);
    //   }
    // }
  }

  return primeNumbers.length;
};

console.log(countPrimes(10));
