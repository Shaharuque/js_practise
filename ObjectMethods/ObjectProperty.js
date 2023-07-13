const objectOne = {
  name: "shaharukh amin",
  age: "23",
  education: "United International University",
};

let user = objectOne.name;
console.log("user:", user);

//The Object.create() static method creates a new object, using an existing object as the prototype of the newly created object.
let prevobj={
  name:"previous object",
  calc:function(x){
    return x+100
  }
}

//use Object.create() to create new object using prev existing object
let newObj=Object.create(prevobj)
console.log(newObj.name)

console.log(prevobj.calc(30))





var obj1={
  a:2,
  b:2,
  c:77
}
var obj2={
  a:1,
  b:1
}

console.log(Object.assign(obj1,obj2))
console.log(obj2)
