let x = 10;
let z = 20;

// x = x + z;
// z = x - z;
// x = x - z;
// console.log("value of x", x, z);

[z, x] = [x, z];
console.log(x, z);
