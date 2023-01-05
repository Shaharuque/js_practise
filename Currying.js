// Function Currying =>each function take only one parameter or no paramenter and return a function
//and lexical scope concept ar maddhomey child function will remember the parent scope varibles
const area = () => {
  return (height = (h) => {
    return (width = (w) => {
      return (length = (l) => {
        return h * w * l;
      });
    });
  });
};

console.log(area()(2)(2)(4));
