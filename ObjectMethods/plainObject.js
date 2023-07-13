var test={
    name:'shaik'
}
console.log(Object.getOwnPropertyDescriptor(test,'name'))
//making Object property writable to false
console.log(Object.defineProperty(test,'name',{writable:false}))
console.log(Object.getOwnPropertyDescriptor(test,'name'))

var str="shaik"
console.log(Object.getOwnPropertyDescriptor(str,'length'))