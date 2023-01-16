var reverseStr = function (s, k) {
  let sliced = s.slice(0, k);
  let remaining = s.slice(k, s.length);
  console.log(sliced);
  let reversed = "";
  for (let i = k - 1; i >= 0; i--) {
    reversed += sliced.charAt(i);
  }
  return reversed + remaining;
};

console.log(reverseStr("abcdefg", 2));
