//class patterns/declation:
//1.Functional
//2.Pseudo-classical
//3.ES6

//this particular solution has a issue as it doesn't follow DRY principle
// var sarah={
//     age:27,
//     howOld:function(){
//         console.log(`sarah age is ${this.age}`)
//     }
// }

// var tamim={
//     age:29,
//     howOld:function(){
//         console.log(`tamim age is ${this.age}`)
//     }
// }

// sarah.howOld()
// tamim.howOld()

//sol-1
//In this solution there is a problem related to memory as every time contructor is invoked function created and takes new place new the memory
// function Person(age,name){   //Person=>contructor
//     var res={}
//     res.name=name
//     res.age=age
//     res.howOld=function(){
//         console.log(`${this.name} is ${this.age}`)
//     }
//     return res
// }

//sol-2=>Functional with shared methods
// function Person(age, name) {
//   //Person=>contructor
//   //   var res = {};
//   //use Object.create to create a new object using persomMethods object
//   //   var res = Object.create(personMethods);
//   var res = Object.create(Person.prototype);
//   res.name = name;
//   res.age = age;
//   //res.howOld = personMethods.howOld;  //res.howOld refer to the personMethods object howOld func and that func have the access of its outer varibles(laxical scoping concept)
//   //without doing we can simply use Object.assign its copy all the properties of source to the target object
//   //Object.assign(res, personMethods);
//   console.log(res);
//   return res;
// }

// // var personMethods = {};
// // personMethods.howOld = function () {
// //   console.log(`${this.name} is ${this.age}`); //In a function, the global object is the default binding for this
// // };
// Person.prototype.howOld = function () {
//   console.log(`${this.name} is ${this.age}`);
// };


//sol-3:Pseudo classical

// function Person(age,name){
//     this.age=age
//     this.name=name
// }

// Person.prototype.howOld=function(){
//     console.log(`${this.name} is ${this.age}`)
// }


// var resultOfsarah = new Person(25, "sarah"); //as parameter i am sending age and name
// resultOfsarah.howOld();

// var resultOftamim =new Person(29, "tamim");
// resultOftamim.howOld()

//ES6 class declation

class Person{
    constructor(age,name){
        this.age=age
        this.name=name
    }
    howOld(){
        console.log(`${this.name} is ${this.age} years old`)
    }
}

var sarah=new Person(25,'sarah')
sarah.howOld()
