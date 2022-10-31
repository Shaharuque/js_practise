const myVehicle = {
  brand: "Ford",
  model: "Mustang",
  color: "red",
};

const updateMyVehicle = {
  type: "car",
  year: 2021,
  color: "yellow",
};

//now copy object
const copied1 = { ...myVehicle };
console.log(copied1);
//appending two object
//Note That:(very Important Fact)
//Notice the properties that did not match were combined, but the property that did match, color, was overwritten by the last object that was passed, updateMyVehicle. The resulting color is now yellow.
const appended = { ...myVehicle, ...updateMyVehicle };
console.log("appended object", appended);
const appendedWithNewValue = {
  ...myVehicle,
  ...updateMyVehicle,
  color: "Purple",
  Budget: "2400$",
};
console.log(appendedWithNewValue);

//---//
//spreadOperator on Array[Array is immutable]
const numbers = [1, 2, 3, 4, 5];
const numbers2 = [3, 45, 56, 7, 656];

const newArray = [...numbers2, ...numbers, 88, 99];
console.log(newArray);
