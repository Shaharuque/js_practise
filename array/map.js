const products = [
  { name: "Laptop", price: 32000, brand: "Lenovo", color: "Silver" },
  { name: "Phone", price: 700, brand: "Iphone", color: "Golden" },
  { name: "Watch", price: 3000, brand: "Casio", color: "Yellow" },
  { name: "Aunglass", price: 300, brand: "Ribon", color: "Blue" },
  { name: "Camera", price: 9000, brand: "Lenovo", color: "Gray" },
];

const newArray = products.map((s) => s.name);

console.log(newArray);
