function has271(nums) {
  for (i = 0; i < nums.length; i++) {
    if (nums[i] === 2 && nums[i + 1] === 7 && nums[i + 2] === 1) {
      return true;
    }
  }
  return false;
}

console.log(has271([1, 2, 7, 1]));
console.log(has271([1, 2, 8, 1]));
console.log(has271([2, 7, 1]));
