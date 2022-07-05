function arrayFront9(nums) {
  for (i = 0; i < nums.length; i++) {
    if (nums[i] === 9) {
      return true;
    }
    if (i === 3) {
      return false;
    }
  }
  return false;
}

console.log(arrayFront9([1, 2, 9, 3, 4]));
console.log(arrayFront9([1, 2, 3, 4, 9]));
console.log(arrayFront9([1, 2, 3, 4, 5]));
