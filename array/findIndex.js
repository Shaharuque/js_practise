// const array = [1, 2, 3, 4, 5];
const shop = [
  {
    id: 1,
    item: "shop",
  },
  {
    id: 2,
    item: "pant",
  },
];

// const result = shop.find((t) => t.id === 2);
// console.log(result);

// const newArray = shop.filter((each) => each.id !== result.id);

// console.log(newArray);

// const newUpdated = [...newArray, result];

// console.log("updated array", newUpdated);

//findIndex gives the index number if the data gets in the array but if not found it gives -1
const findIndex = shop.findIndex((s) => s.id === 4);
console.log(findIndex);

const numbers = [
  { id: 1, name: "sha" },
  { id: 2, name: "sha2" },
  { id: 3, name: "sha4" },
];

const newArray = numbers?.filter((t) => t.id !== 2);

console.log(newArray);
