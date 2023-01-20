var maxProfit = function (prices) {
  let Maxprofit = 0;
  let minPrice = Math.max(...prices); //7
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      let profit = prices[i] - minPrice;
    }
  }
  return Math.max(...profit);
};
console.log(maxProfit([[7, 1, 5, 3, 6, 4]]));
