var isUgly = function (n) {
  let prime = new Array(n).fill(true);
  let isPrime = false;
  let primeNumbers = [];
  if (n == 1) {
    return true;
  } else {
    for (let i = 2; i <= n; i++) {
      if (n % i === 0) {
        if (prime[i] === true) {
          for (let j = i * i; j < n; j += i) {
            prime[j] = false;
          }
          console.log(i);
          if (i === 2 || i === 3 || i === 5) {
            isPrime = true;
          } else {
            isPrime = false;
          }

          //   if (i != 2 || i != 3 || i != 5) {
          //     return false;
          //   }
          //   if (i != 2) {
          //     if (i != 3) {
          //       if (i != 5) {
          //         isPrime = false;
          //       }
          //     }
          //   } else if (i == 2 || i == 3 || i == 5) {
          //     isPrime = true;
          //   }
        }
      }
    }
  }
  return isPrime;
};

console.log(isUgly(214797179));
