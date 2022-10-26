//lexical scope is important part of closure. A closure is a function having access to the parent scope, even after the parent function has closed.
const myFunction = () => {
  let myValue = 2;
  console.log(myValue);

  const childFunction = () => {
    console.log((myValue += 1));
  };

  return childFunction;
};
//here myFunction is the parent fuction and after return the parent function is closed but the child function has the access to the parent scope varible
const result = myFunction(); //childFunction will be stored in result
console.log(result);
result();
result();
result();
