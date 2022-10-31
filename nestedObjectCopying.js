const student = {
  name: "Amin",
  age: 12,
  structure: {
    eyes: 2,
    legs: 2,
    hands: 2,
    brain: 1,
  },
};

//copying the object using spread operator

//object destructring
const { name, age } = student;
console.log(name, age);

//copying the objected immutabilly
const newObject = {
  ...student,
  structure: {
    ...student?.structure,
    legs: 3, //existing property changed
    brain: 0, //new property added to copied object
  },
};
newObject.structure.eyes = 5;

console.log("copied object-->", newObject);
console.log("original object-->", student);
