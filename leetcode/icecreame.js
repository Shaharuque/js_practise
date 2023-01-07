var maxIceCream = function (costs, coins) {
  let total = 0;
  let moneyArray = [];
  let sortedArray = costs.sort((a, b) => a - b);
  //console.log(sortedArray);
  for (let i = 0; i < sortedArray.length; i++) {
    if (total <= coins) {
      total += sortedArray[i];
      if (total > coins) {
        total -= sortedArray[i];
        continue;
      }
    }
    if (total <= coins) {
      moneyArray.push(sortedArray[i]);
    }
    console.log(moneyArray);
  }
  return moneyArray.length;
};

console.log(maxIceCream([1, 3, 2, 4, 1], 7));
