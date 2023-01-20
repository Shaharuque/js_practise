var superPow = function (a, b) {
  let init = String(b[0]);
  for (let i = 1; i < b.length; i++) {
    init = parseInt(init + String(b[i]));
  }
  let cb = BigInt(a);
  let cb2 = BigInt(init);
  let result = cb ** cb2 % BigInt(1337);
  // let result = (a ** init) % (1337);
  //   return result
  return parseInt(result);
};

console.log(superPow(2, [2, 3, 4]));
