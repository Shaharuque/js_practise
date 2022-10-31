//array and object can be easily mutable cuz when we copy array or object it doesn't copy whole array elements or oject its just copied the memory location/reference so changing copied array or object makess impact on original array or object

const number = [1, 2, 3, 4];
const copiedNumber = number;
console.log("copied array", copiedNumber);
//now change occures in the copied array
copiedNumber[2] = 12;
console.log("change copied array", copiedNumber);
console.log("Original array", number);
//as we copied directly so when we change the copied array it also autometically changed the original array in JS

//To prevent the above problem we need to use array destructring /object destructring and spread operator
const destructringArray = [...number]; //coping array using array destructring this is how we can maintain immutability
destructringArray[2] = 32;
console.log("copied array", destructringArray);
console.log("original array", number);

//------------------XX----------------------------
//object copying to maintain Immutability
const student = {
  name: "motin",
  age: 12,
};
const newStudent = student;
// newStudent.name = "kamal";

//as we copied the original object directly so if we change in new object it will impact on original object as well as Immutabilty is n't maintained here and to prevent this problem we should use object destructring after spread the oiginal object to copy the original object...
console.log("changed object", newStudent);
console.log("original object", student);

//object destructring
const newStudent2 = { ...student };
newStudent2.name = "kamal";

console.log("copied object", newStudent2);
console.log("original object", student);

//---------------XX---------------
