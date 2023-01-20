var toLowerCase = function (s) {
  let i = 0;
  let updated = "";
  while (i < s.length) {
    // console.log(s.charCodeAt(i));
    if (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) {
      console.log(s.charCodeAt(i) + 32);
      let afterUpdate = s.charCodeAt(i) + 32;
      console.log(s[i]);
      let result = String.fromCharCode(afterUpdate);
      updated += result;
    } else {
      updated += s[i];
    }
    i = i + 1;
  }
  console.log(updated);
};
toLowerCase("LOVELe");
