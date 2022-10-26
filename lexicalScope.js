//1. Lexical scope describes how nested (also known as "child") functions have access to variables defined in parent scopes.(inner most parent scope varible willbe searched first)

// let global_number = 22; //global parent
// const parent = () => {
//   let parent_num = 2;
//   console.log("parent scope varible", parent_num);
//   const child = () => {
//     let child_number = 3;
//     console.log(
//       "child scope is accessing parent scoped varible",
//       global_number,
//       parent_num + 2,
//       child_number
//     );
//   };
//   child();
// };

// parent();

const v = 78;
const test = () => {
  console.log("outter", v);
  const test1 = () => {
    console.log("inner1", v);
    const test2 = () => {
      const l = 88;
      console.log("inner2", v, l);
    };
    test2();
  };
  test1();
};
test();
