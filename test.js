// const animals = ["jaugar", "eagle"];
// animals.shift();
// console.log(animals[0]);

const animals = ["tiger", "cat", "dog", "cat", null];

const getUnique = (array) => {
  let uniqueArray = [];

  // Loop through array values
  for (let value of array) {
    if (uniqueArray.indexOf(value) === -1) {
      //unique array tey particular 'value' jodi na thakey thaley 'value' will be pushed
      uniqueArray.push(value);
    }
  }
  return uniqueArray;
};

//this funtion to get dynamic filter value-text
const makingObject = () => {
  const resultArray = getUnique(animals);
  //return filterData;
  let newArray = [];
  for (let x of resultArray) {
    if (x === null) {
      continue;
    } else {
      newArray.push({ text: x, value: x });
    }
  }
  return newArray;
};

console.log(makingObject());

// let x = 6,
//   y = 8,
//   z = 9;
// let a = x + y + z;
// console.log(a);

// let A = (m, n) => {
//   return m + n;
// };

// console.log(A(1, 1));
