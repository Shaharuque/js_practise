const test = () => {
  const numberArray = [2, 22, 33, 45];
  const numberObject = { value: 22, token: "232333" };
  //return numberObject;
  //return [1, 2, 34, 44];
  return { value: 22, token: "#ywdwauda" };
};

// const result = test();
// console.log(result);

// const [a, b, d, c] = test();  //position plays vital role here
// console.log("a,b,c,d", a, b, c, d);
const { token, value } = test(); //positioning doesn't affect much
console.log(token, value);
