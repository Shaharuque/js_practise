const shop = [
  { name: "Lg", status: true },
  { name: "Apple", status: true },
  { name: "Samsung", status: false },
];

const products = [true, false];

const filters = [
  { text: "Active", value: true },
  { text: "InActive", value: false },
];

const filteredResult = shop.filter((product) => product.status === false);
console.log(filteredResult);

const newResult = filters.find((product) => product.value === false);
console.log(newResult);

const includedResult = products.includes(false);
console.log(includedResult);
