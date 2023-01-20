var reverseStr = function (s, k) {
  if (s.length > 2 * k) {
  } else {
    let sliced = s.slice(0, k);
    let remaining = s.slice(k, s.length);
    console.log(remaining);
    let reversed = "";
    for (let i = k - 1; i >= 0; i--) {
      reversed += sliced.charAt(i);
    }
    return reversed + remaining;
  }
};

console.log(reverseStr("abcdefg", 2));
