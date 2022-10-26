// let num = "6";
// let num2 = 6;
// console.log(num + num2); //Implicit conversion done
// console.log(Number(num) + num2); //explecit conversion done here

// callback function: passing function as an argument to another function
// const mars = () => {
//   console.log("Hello from mars");
// };

// const jupiter = (plannet) => {
//   plannet();
//   console.log("Hello from jupiter");
// };

// jupiter(mars);

// //loopting through object
// const cloths = [
//   { name: "mewao", price: 23 },
//   {
//     name: "cat",
//     price: 235,
//   },
// ];

// for (x of cloths) {
//   for (key in x) {
//     console.log(x[key]);
//   }
// }

//arrow function
// const sum = (num = 5) => num + 6;

// console.log(sum(4));

//scoping
let myName = "shaik";
myName = "hatim";
let type = "CAt";
const test = () => {
  const myName = "motin";
  console.log(myName);
  type = "pussy";
  console.log("global scope", type);
};
console.log(myName);
test();
