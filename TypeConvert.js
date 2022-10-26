const numOne = "1000";
const numTwo = 10;

console.log("multiply", numOne * numTwo); //implicit type convertion can be happen for multiplication ,sub and div but not for addition
console.log("sub", numOne - numTwo);
//different for addition where implicit convertion doesn't affect and it just append
console.log("addition", Number(numOne) + numTwo); //here we need explicit type convertion

console.log("converted to string", numTwo.toString());
console.log("converted to number", parseInt(numOne));
