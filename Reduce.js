const numbers = [100, 200, 300];

//get the total sum using normal looping
//initial value of sum
let sum = 0;
for (let i of numbers) {
  sum += i;
}
console.log(sum);

//---//uporer kaj tuku reduce method use korey kora hoccey
//accumulator works as sum and its initialvalue is 0 is declared
//returned single value of total
//0 is set to be the initial value of accumulator
const result = numbers.reduce((accumulator, curruentValue) => {
  return (accumulator += curruentValue);
}, 0);

console.log(result);

//we can remove initial value of accumulator=0 and the array first index value will be the initial value of accumulator and and the next value will be  value of currentValue

const result2 = numbers.reduce((accumulator, currentValue) => {
  return (accumulator += currentValue);
});

console.log("total without using accumulator initial value:", result2);

//far cleaner code

const result3 = numbers.reduce(
  (accumulator, currentValue) => (accumulator += currentValue)
);
console.log("Far clearner code ", result3);
