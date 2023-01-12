var maxProfit = function (prices) {
  let profit = [0];
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] > prices[i]) {
        let result = prices[j] - prices[i];
        profit.push(result);
      }
    }
  }
  console.log(Math.max(...profit));
};

maxProfit([7, 6, 4, 3, 8]);
