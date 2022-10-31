const object1 = {
  age: 23,
  color: "black",
  access: {
    rooms: [1, 2, 3],
    keys: true,
  },
};

//object destructring
const { access } = object1;
const { rooms } = access;
console.log(access, rooms);
