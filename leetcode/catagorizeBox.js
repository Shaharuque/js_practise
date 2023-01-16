var categorizeBox = function (length, width, height, mass) {
  let bulky = false;
  let heavy = false;
  console.log(Math.pow(10, 9)); //10^3
  let box_volumn = length * width * height;
  console.log(box_volumn);
  if (
    length >= Math.pow(10, 4) ||
    width >= Math.pow(10, 4) ||
    height >= Math.pow(10, 4) ||
    mass >= Math.pow(10, 4) ||
    box_volumn >= Math.pow(10, 9)
  ) {
    bulky = true;
  }
  if (mass >= 100) {
    heavy = true;
  }

  console.log(bulky, heavy);

  //4 conditions
  if (bulky && heavy) {
    return "Both";
  } else if (!bulky && !heavy) {
    return "Neither";
  } else if (bulky && !heavy) {
    return "Bulky";
  } else if (!bulky && heavy) {
    return "Heavy";
  }
};

console.log(categorizeBox(1, 10000, 1, 1));
