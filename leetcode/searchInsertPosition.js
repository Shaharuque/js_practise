var searchInsert = function (nums, target) {
  var indices = [];

  nums.filter((e, index) => {
    if (e == target) {
      indices.push(index);
    }
  });

  if (indices.length === 0) {
    nums.push(target);
    let sorted = nums.sort((a, b) => a - b);
    console.log("sorted", sorted);
    let desiredIndex = sorted.indexOf(target);
    //console.log(desiredIndex);
    return desiredIndex;
  } else {
    return indices[0]; //target milley tar index value ta return in array
  }
};

// searchInsert([1, 3, 5, 6], 7);
console.log(searchInsert([1, 3, 5, 6], 6));
