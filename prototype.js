function func(){
    name:"shaik"
}


func.name = function(){
    console.log("shaik");
}
const student={
    name:"shaik",
}

const teacher={
    roll:"teacher"
}

//teacher 
//Object.setPrototypeOf(student,teacher);
student.__proto__ = teacher;

console.log(student.roll);
//-----------------//
let source={
    a:1,b:2,c:3
}

let target={
    c:4,d:5
}

console.log(Object.assign(target,source))