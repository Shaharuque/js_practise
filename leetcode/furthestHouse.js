var maxDistance = function (prices) {
  let profit = [0];
  let result;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] === prices[j]) {
        continue;
        // let result = prices[j] - prices[i];
        // profit.push(result);
      } else {
        result = prices.indexOf(prices[i]) - prices.indexOf(prices[j]);
        console.log(result);
      }
    }
  }

  //   console.log(Math.max(...profit));
};

maxDistance([1, 8, 3, 8, 3]);
