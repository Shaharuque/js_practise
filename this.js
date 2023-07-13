//in a object this refers to the own object
//this returns the whole object
// const person = {
//     firstName  : "John",
//     lastName   : "Doe",
//     id         : 5566,
//     myFunction : function() {
//       console.log(`${this.firstName}-${this.lastName}`)
//     }
//   };
// person.myFunction()

//In a function, this refers to the global object.
// const obj1={
//     name:"amin",
//     age:23
// }
// function myFunction() {
//     return this;
// }

// console.log(myFunction())

//here this will return the whole object
const person = {
    firstName  : "John",
    lastName   : "Doe",
    id         : 5566,
    myFunction : function() {
      return this;
    }
  };

console.log(person.myFunction())  